import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@angular/router";

import {App} from "./components/app";
import {Home} from "./components/home/home";
import {Invitation} from "./components/invitation/invitation";
import {Gallery} from "./components/gallery/gallery";
import {Contact} from "./components/contact/contact";
import {Login} from "./components/login/login";

import {AuthGuard} from "./utils";

var Routes = [
    {path: "", component: Home, canActivate: [AuthGuard]},
    {path: "home", component: Home, canActivate: [AuthGuard]},
    {path: "invitation", component: Invitation, canActivate: [AuthGuard]},
    {path: "gallery", component: Gallery, canActivate: [AuthGuard]},
    {path: "contact", component: Contact, canActivate: [AuthGuard]},
    {path: "login", component: Login}
];

bootstrap(App, [provideRouter(Routes), AuthGuard])
    .catch(err => console.error(err));
