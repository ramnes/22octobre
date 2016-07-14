import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {User} from "../user/model";
import {LoginService} from "./service";
import {LocalStorage} from "../utils";

@Component({
    selector: "app-login",
    templateUrl: "app/login/component.html",
    styleUrls: ["app/login/component.css"],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    invalid: boolean;

    constructor(private service: LoginService, private router: Router) {
        this.invalid = false;
    }

    ngOnInit() {
        var user = LocalStorage.get("user");
        if (user && user._id && user.name)
            this.router.navigate(["/invitation"])
    }

    redirect(user: User) {
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
        this.service.getUser(code.value).subscribe(
            user => this.redirect(user),
            error => this.handleError(code)
        );
    }
}
