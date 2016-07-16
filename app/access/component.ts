import {Component} from "@angular/core";

import {GOOGLE_MAPS_DIRECTIVES} from "angular2-google-maps/core";

import {NavigationComponent} from "../navigation/component";

class Marker {
    lat: number;
    lng: number;
    label: string;
    address: string;
}

@Component({
    selector: "app-access",
    templateUrl: "app/access/component.html",
    styleUrls: ["app/access/component.css"],
    directives: [GOOGLE_MAPS_DIRECTIVES, NavigationComponent]
})
export class AccessComponent {
    zoom: number = 12;
    lat: number = 47.855;
    lng: number = 3.42;

    markers: Marker[] = [
        {
            lat: 47.868806,
            lng: 3.452150,
            label: "Mairie de Fleury-la-Vallée",
            address: "Mairie,+26+Grande+Rue,+Fleury-la-Vallée"
        },
        {
            lat: 47.871782,
            lng: 3.450908,
            label: "Église de Fleury-la-Vallée",
            address: "1+Place+de+l'Église,+Fleury-la-Vallée"
        },
        {
            lat: 47.8489488,
            lng: 3.3992011,
            label: "Domaîne des Granges",
            address: "Domaine+des+Granges,+Route+de+Poilly,+Poilly-sur-Tholon"
        }
    ]

    getDirectionUrl(marker: Marker) {
        if (navigator.platform.indexOf("iPhone") != -1
            || navigator.platform.indexOf("iPod") != -1
            || navigator.platform.indexOf("iPad") != -1)
            return `maps://maps.google.com/maps?daddr=${marker.address}`;
        return `http://maps.google.com/maps?daddr=${marker.address}`;
    }
}
