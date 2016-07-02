import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";

import {User} from "../user/model";
import {APIUrl} from "../constants";

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    extractUser(response: Response) {
        var data = response.json().data;
        if (data)
            return new User(data._id, data.name);
    }

    getUser(code: string): Observable<User> {
        return this.http.get(APIUrl + "/user/" + code)
            .map(this.extractUser);
    }
}
