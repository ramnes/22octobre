import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {married} from "../utils";

@Component({
    selector: "app-navigation",
    templateUrl: "app/navigation/component.html",
    styleUrls: ["app/navigation/component.css"],
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {
    married = married;
}
