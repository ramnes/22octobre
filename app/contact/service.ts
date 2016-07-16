import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Http, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";

import {APIUrl} from "../constants";

@Injectable()
export class ContactService {
    constructor(private http: Http) {}

    post(code: string, subject: string, message: string): Observable<any> {
        var url = APIUrl + "/messages?code=" + code;
        var body = JSON.stringify({subject, message});
        var headers = new Headers({"Content-Type": "application/json"});
        var options = new RequestOptions({headers: headers});

        return this.http.post(url, body, options)
            .map((response: Response) => response.json());
    }
}
