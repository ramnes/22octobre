import {Component} from "@angular/core";

import {NavigationComponent} from "../navigation/component";

@Component({
    selector: "app-home",
    templateUrl: "app/home/component.html",
    styleUrls: ["app/home/component.css"],
    directives: [NavigationComponent]
})
export class HomeComponent {}
