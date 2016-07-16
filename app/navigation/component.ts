import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

import {married, LocalStorage} from "../utils";

@Component({
    selector: "app-navigation",
    templateUrl: "app/navigation/component.html",
    styleUrls: ["app/navigation/component.css"],
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {
    user: any;

    constructor(private router: Router) {
        this.user = LocalStorage.get("user");
    }

    disconnect() {
        LocalStorage.remove("code");
        LocalStorage.remove("user");
        this.router.navigate(["/login"]);
    }

    married = married;
}
