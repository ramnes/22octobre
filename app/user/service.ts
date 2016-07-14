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
}
