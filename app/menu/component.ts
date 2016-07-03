import {Component} from "@angular/core";

import {NavigationComponent} from "../navigation/component";

@Component({
    selector: "app-menu",
    templateUrl: "app/menu/component.html",
    styleUrls: ["app/menu/component.css"],
    directives: [NavigationComponent]
})
export class MenuComponent {}
