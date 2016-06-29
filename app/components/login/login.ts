import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "app/components/login/login.html",
    styleUrls: ["app/components/login/login.css"]
})
export class Login {
    constructor(private router: Router) {}

    submit() {
        this.router.navigate(["/home"]);
    }
}
