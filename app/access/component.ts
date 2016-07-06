import {Component} from "@angular/core";

import {GOOGLE_MAPS_DIRECTIVES, GOOGLE_MAPS_PROVIDERS, MapsAPILoader,
        MouseEvent, NoOpMapsAPILoader} from "angular2-google-maps/core";

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
    directives: [GOOGLE_MAPS_DIRECTIVES, NavigationComponent],
    providers: [GOOGLE_MAPS_PROVIDERS]
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
            dirUrl: "https://www.google.fr/maps/dir//Mairie,+Gr+Grande+Rue,+Fleury-la-Vall%C3%A9e/@47.8688178,3.4170956,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x47ee4d5fe0757227:0x86f9f87a0e8c2864!2m2!1d3.4521149!2d47.8688231"
        },
        {
            lat: 47.871782,
            lng: 3.450908,
            label: "Église de Fleury-la-Vallée",
            dirUrl: "https://www.google.fr/maps/dir//1+Place+de+l'%C3%89glise,+Fleury-la-Vall%C3%A9e/@47.8715296,3.4487267,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x47ee52a04111b03f:0xa60608de822f6ba2!2m2!1d3.4509154!2d47.8715296"
        },
        {
            lat: 47.8489488,
            lng: 3.3992011,
            label: "Domaîne des Granges",
            dirUrl: "https://www.google.fr/maps/dir//Domaine+des+Granges+-+Salle+et+Jardin+de+R%C3%A9ception,+Route+de+Poilly,+Poilly-sur-Tholon/@47.8489367,3.3642947,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x47efb293cf018583:0x7ec5a27cee565ae4!2m2!1d3.399314!2d47.848942"
        }
    ]
}
