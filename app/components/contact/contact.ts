import {Component} from "@angular/core";

import {Navigation} from "../../shared/navigation/navigation";

@Component({
    selector: "app-contact",
    templateUrl: "app/components/contact/contact.html",
    styleUrls: ["app/components/contact/contact.css"],
    directives: [Navigation]
})
export class Contact {}
