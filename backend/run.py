import unicodedata
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from smtplib import SMTP

from bson import ObjectId
from flask import abort, Flask, jsonify, request
from flask.json import JSONEncoder as FlaskJSONEncoder
from pymongo import MongoClient
from pymongo.collection import ReturnDocument


class JSONEncoder(FlaskJSONEncoder):

    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return super(JSONEncoder, self).default(o)


app = Flask(__name__)
app.json_encoder = JSONEncoder
db = MongoClient(connect=False)["22octobre"]

signature = """

-- 
Ce courriel a été envoyé automatiquement par 22octobre.fr.
Inutile de répondre à cette adresse.
"""


def strip_accents(string):
    return ''.join(c for c in unicodedata.normalize('NFD', string)
                   if unicodedata.category(c) != 'Mn')


def send_email(user, subject, message):
    email = MIMEMultipart("alternative")
    email["To"] = "Caroline Ballif et Guillaume Gelin <mariage@ramnes.eu>"
    email["Subject"] = subject

    name = strip_accents(user["name"])
    email["From"] = "{} <contact@22octobre.fr>".format(name)

    message = MIMEText(message)
    email.attach(message)
        
    with SMTP() as smtp:
        smtp.connect()
        smtp.send_message(email)


@app.before_request
def check_code():
    code = request.args.get("code")
    user = db.user.find_one({"code": code})
    if not user:
        abort(404)
    request.user = user


@app.route("/user", methods=["GET"])
def get_user():
    return jsonify({"data": request.user})


@app.route("/user", methods=["PATCH"])
def patch_user():
    data = request.get_json()
    user = db.user.find_one_and_update({"_id": request.user["_id"]}, {"$set": data},
                                       return_document=ReturnDocument.AFTER)

    answer = data.get("answer")
    if answer is not None:
        name = request.user["name"]
        title = "Réponse de {} sur 22octobre.fr".format(name)
        if answer and " et " in name:
            email = "{} seront présents !\n\nDeux personnes en plus ! :)"
        elif "et" in name:
            email = "{} ne seront pas parmi nous ce jour."
        elif answer:
            email = "{} sera là le 22 octobre ! :D"
        else:
            email = "{} ne sera pas là."
        email = email.format(name)    
        email += signature
        send_email(request.user, "Nouvelle réponse", email)
    return jsonify({"data": user})


@app.route("/user", methods=["PUT"])
def put_user():
    data = request.get_json()
    data.pop("_id", None)
    user = db.user.find_one_and_replace({"_id": request.user["_id"]}, data,
                                        return_document=ReturnDocument.AFTER)
    return jsonify({"data": user})


@app.route("/messages", methods=["POST"])
def post_message():
    message = request.get_json()
    message.update(user_id=request.user["_id"])
    db.message.insert(message)

    subject = message.get("subject", "")
    email = message.get("message", "")
    email += "\n\n" + request.user["name"]
    email += signature
    send_email(request.user, subject, email)
    return jsonify({})


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
