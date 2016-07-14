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

    constructor(private users: UserService) {
        this.user = LocalStorage.get("user");
    }

    handleError(error: any) {
        console.error(error);
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
            user => this.updateUser(user),
            error => this.handleError(error)
        );
    }

    cancelable() {
        return new Date() < limitDate;
    }
}
