import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";

import {User} from "./model";
import {APIUrl} from "../constants";

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    extract(response: Response): User {
        var data = response.json().data;
        if (data)
            return data;
    }

    get(code: string): Observable<User> {
        return this.http.get(APIUrl + "/user/" + code)
            .map(this.extract);
    }

    patch(user: User, fields: any): Observable<User> {
        var body = JSON.stringify(fields);
        var headers = new Headers({"Content-Type": "application/json"});
        var options = new RequestOptions({headers: headers});

        return this.http.patch(APIUrl + "/user/" + user._id, body, options)
            .map(this.extract);
    }

    put(user: User): Observable<User> {
        var body = JSON.stringify(user);
        var headers = new Headers({"Content-Type": "application/json"});
        var options = new RequestOptions({headers: headers});

        return this.http.put(APIUrl + "/user/" + user._id, body, options)
            .map(this.extract);
    }
}
