import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: "app",
    templateUrl: "app/components/app.html",
    directives: [ROUTER_DIRECTIVES]
})
export class App {}
