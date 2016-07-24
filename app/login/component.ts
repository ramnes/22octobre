import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {User} from "../user/model";
import {UserService} from "../user/service";
import {LocalStorage} from "../utils";

@Component({
    selector: "app-login",
    templateUrl: "app/login/component.html",
    styleUrls: ["app/login/component.css"],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    invalid: boolean;

    constructor(private users: UserService, private router: Router) {
        this.invalid = false;
    }

    ngOnInit() {
        var user = LocalStorage.get("user");
        if (user && user._id && user.name)
            this.router.navigate(["/invitation"])
    }

    redirect(code: string, user: User) {
        LocalStorage.set("code", code);
        LocalStorage.set("user", user);
        this.router.navigate(["/invitation"]);
    }

    handleError(code: HTMLInputElement) {
        code.value = "";
        code.placeholder = "Code invalide";
        code.focus();
        this.invalid = true;
   }

    submit(code: HTMLInputElement) {
        var codeURI = encodeURIComponent(code.value);
        this.users.get(codeURI).subscribe(
            user => this.redirect(codeURI, user),
            error => this.handleError(code)
        );
    }
}
