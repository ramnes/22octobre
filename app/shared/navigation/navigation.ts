import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: "app-navigation",
    templateUrl: "app/shared/navigation/navigation.html",
    styleUrls: ["app/shared/navigation/navigation.css"],
    directives: [ROUTER_DIRECTIVES]
})
export class Navigation {}
