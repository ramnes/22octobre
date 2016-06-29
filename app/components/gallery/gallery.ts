import {Component} from "@angular/core";

import {Navigation} from "../../shared/navigation/navigation";

@Component({
    selector: "app-gallery",
    templateUrl: "app/components/gallery/gallery.html",
    styleUrls: ["app/components/gallery/gallery.css"],
    directives: [Navigation]
})
export class Gallery {}
