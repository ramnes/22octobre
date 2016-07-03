import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";

import {wedding_date} from "./constants";

export function married() {
    return (new Date() > wedding_date);
}

export class LocalStorage {
    static get(key: string) {
        var value = localStorage.getItem(key);

        if (value && value !== "undefined")
            return JSON.parse(value);
    }

    static set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        var user = LocalStorage.get("user");
        if (user && user._id && user.name)
            return true;
        this.router.navigate(["/login"]);
        return false;
    }
}
