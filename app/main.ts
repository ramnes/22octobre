import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@angular/router";

import {GOOGLE_MAPS_PROVIDERS,
        provideLazyMapsAPILoaderConfig} from "angular2-google-maps/core";

import {AppComponent} from "./component";
import {HomeComponent} from "./home/component";
import {InvitationComponent} from "./invitation/component";
import {GalleryComponent} from "./gallery/component";
import {MenuComponent} from "./menu/component";
import {AccessComponent} from "./access/component";
import {ContactComponent} from "./contact/component";
import {LoginComponent} from "./login/component";

import {AuthGuard} from "./utils";
import {mapsAPIKey} from "./constants";

var routes = [
    {path: "", component: InvitationComponent, canActivate: [AuthGuard]},
    {path: "invitation", component: InvitationComponent, canActivate: [AuthGuard]},
    {path: "gallery", component: GalleryComponent, canActivate: [AuthGuard]},
    {path: "menu", component: MenuComponent, canActivate: [AuthGuard]},
    {path: "access", component: AccessComponent, canActivate: [AuthGuard]},
    {path: "contact", component: ContactComponent, canActivate: [AuthGuard]},
    {path: "login", component: LoginComponent}
];

bootstrap(AppComponent, [provideRouter(routes), AuthGuard, GOOGLE_MAPS_PROVIDERS,
                         provideLazyMapsAPILoaderConfig({apiKey: mapsAPIKey})])
    .catch(err => console.error(err));
