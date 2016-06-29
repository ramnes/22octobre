import {Component} from "@angular/core";

import {Navigation} from "../../shared/navigation/navigation";

@Component({
    selector: "app-home",
    templateUrl: "app/components/home/home.html",
    styleUrls: ["app/components/home/home.css"],
    directives: [Navigation]
})
export class Home {}
