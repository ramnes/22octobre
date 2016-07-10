import {Component} from "@angular/core";

import {LocalStorage} from "../utils";
import {User} from "../user/model";

import {NavigationComponent} from "../navigation/component";

@Component({
    selector: "app-invitation",
    templateUrl: "app/invitation/component.html",
    styleUrls: ["app/invitation/component.css"],
    directives: [NavigationComponent]
})
export class InvitationComponent {
    user: User;

    constructor() {
        this.user = LocalStorage.get("user");
    }
}
