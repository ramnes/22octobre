import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";

import {User} from "../user/model";
import {APIUrl} from "../constants";

@Injectable()
export class ContactService {
    constructor(private http: Http) {}

    post(user: User, subject: string, message: string): Observable<string> {
        var url = APIUrl + "/messages?code=" + user._id;
        var body = JSON.stringify({subject, message});
        var headers = new Headers({"Content-Type": "application/json"});
        var options = new RequestOptions({headers: headers});

        return this.http.post(url, body, options)
            .map((response: Response) => response.json().message);
    }
}
