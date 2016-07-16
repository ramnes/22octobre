import {Component} from "@angular/core";

import {NavigationComponent} from "../navigation/component";
import {ContactService} from "./service";
import {LocalStorage} from "../utils";

@Component({
    selector: "app-contact",
    templateUrl: "app/contact/component.html",
    styleUrls: ["app/contact/component.css"],
    directives: [NavigationComponent],
    providers: [ContactService]
})
export class ContactComponent {
    sent: boolean;
    error: boolean;
    code: string;

    constructor(private service: ContactService) {
        this.sent = false;
        this.error = false;
        this.code = LocalStorage.get("code");
    }

    handleSuccess(subject: HTMLInputElement, message: HTMLInputElement) {
        this.sent = true;
        subject.value = "";
        message.value = "";
    }

    submit(subject: HTMLInputElement, message: HTMLInputElement) {
        this.error = false;
        this.sent = false;
        this.service.post(this.code, subject.value, message.value).subscribe(
            sent => this.handleSuccess(subject, message),
            error => {this.error = true}
        );
    }

    close() {
        this.error = false;
        this.sent = false;
    }
}
