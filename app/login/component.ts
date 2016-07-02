import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "app/login/component.html",
    styleUrls: ["app/login/component.css"]
})
export class LoginComponent {
    constructor(private router: Router) {}

    submit() {
        this.router.navigate(["/home"]);
    }
}
