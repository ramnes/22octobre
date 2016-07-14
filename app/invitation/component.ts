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
    user: User;
    error: boolean;

    constructor(private users: UserService) {
        this.user = LocalStorage.get("user");
        this.error = false;
    }

    handleError(error: any) {
        this.error = true;
    }

    updateUser(user: User) {
        this.user = user;
        LocalStorage.set("user", user);
    }

    accept() {
        this.users.patch(this.user, {answer: true}).subscribe(
            user => this.updateUser(user),
            error => this.handleError(error)
        );
    }

    decline() {
        this.users.patch(this.user, {answer: false}).subscribe(
            user => this.updateUser(user),
            error => this.handleError(error)
        );
    }

    cancel() {
        delete this.user.answer;
        this.users.put(this.user).subscribe(
            user => this.updateUser(user)
        );
    }

    cancelable() {
        return new Date() < limitDate;
    }

    retry() {
        this.error = false;
    }
}
