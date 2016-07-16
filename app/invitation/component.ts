import {Component} from "@angular/core";

import {limitDate} from "../constants";
import {LocalStorage} from "../utils";
import {User} from "../user/model";
import {UserService} from "../user/service";

import {NavigationComponent} from "../navigation/component";

@Component({
    selector: "app-invitation",
    templateUrl: "app/invitation/component.html",
    styleUrls: ["app/invitation/component.css"],
    directives: [NavigationComponent],
    providers: [UserService]
})
export class InvitationComponent {
    error: boolean;
    user: User;
    code: string;

    constructor(private users: UserService) {
        this.error = false;
        this.user = LocalStorage.get("user");
        this.code = LocalStorage.get("code");
    }

    handleError(error: any) {
        this.error = true;
    }

    updateUser(user: User) {
        this.user = user;
        LocalStorage.set("user", user);
    }

    accept() {
        this.users.patch(this.code, {answer: true}).subscribe(
            user => this.updateUser(user),
            error => this.handleError(error)
        );
    }

    decline() {
        this.users.patch(this.code, {answer: false}).subscribe(
            user => this.updateUser(user),
            error => this.handleError(error)
        );
    }

    cancel() {
        delete this.user.answer;
        this.users.put(this.code, this.user).subscribe(
            user => this.updateUser(user)
        );
    }

    cancelable() {
        return new Date() < limitDate;
    }

    close() {
        this.error = false;
    }
}
