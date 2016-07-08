import {Component} from "@angular/core";

import {NavigationComponent} from "../navigation/component";
import {ContactService} from "./service";
import {LocalStorage} from "../utils";
import {User} from "../user/model";

@Component({
    selector: "app-contact",
    templateUrl: "app/contact/component.html",
    styleUrls: ["app/contact/component.css"],
    directives: [NavigationComponent],
    providers: [ContactService]
})
export class ContactComponent {
    constructor(private service: ContactService) {}

    submit(subject: HTMLInputElement, message: HTMLInputElement) {
        var user: User = LocalStorage.get("user");
        this.service.post(user, subject.value, message.value).subscribe();
    }
}
