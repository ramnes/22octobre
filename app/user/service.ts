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
        var url = APIUrl + "/user?code=" + code;

        return this.http.get(url)
            .map(this.extract);
    }

    patch(user: User, fields: any): Observable<User> {
        var url = APIUrl + "/user?code=" + user._id;
        var body = JSON.stringify(fields);
        var headers = new Headers({"Content-Type": "application/json"});
        var options = new RequestOptions({headers: headers});

        return this.http.patch(url, body, options)
            .map(this.extract);
    }

    put(user: User): Observable<User> {
        var url = APIUrl + "/user?code=" + user._id;
        var body = JSON.stringify(user);
        var headers = new Headers({"Content-Type": "application/json"});
        var options = new RequestOptions({headers: headers});

        return this.http.put(url, body, options)
            .map(this.extract);
    }
}
