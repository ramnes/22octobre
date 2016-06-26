import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {Navigation} from "../shared/navigation/navigation";

@Component({
    selector: "app",
    templateUrl: "app/components/app.html",
    directives: [ROUTER_DIRECTIVES, Navigation]
})
export class App {}
