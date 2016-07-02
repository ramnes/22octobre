import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {User} from "../user/model";
import {LoginService} from "./service";

@Component({
    selector: "app-login",
    templateUrl: "app/login/component.html",
    styleUrls: ["app/login/component.css"],
    providers: [LoginService]
})
export class LoginComponent {
    constructor(private service: LoginService, private router: Router) {}

    redirect(user: User) {
        console.log(user);
        this.router.navigate(["/home"]);
    }

    submit(code: string) {
        this.service.getUser(code).subscribe(
            user => this.redirect(user)
        );
    }
}
