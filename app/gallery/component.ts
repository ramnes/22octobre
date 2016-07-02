import {Component} from "@angular/core";

import {NavigationComponent} from "../navigation/component";

@Component({
    selector: "app-gallery",
    templateUrl: "app/gallery/component.html",
    styleUrls: ["app/gallery/component.css"],
    directives: [NavigationComponent]
})
export class GalleryComponent {}
