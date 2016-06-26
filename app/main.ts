import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@angular/router";

import {App} from "./components/app";
import {Home} from "./components/home/home";
import {Invitation} from "./components/invitation/invitation";
import {Gallery} from "./components/gallery/gallery";
import {Contact} from "./components/contact/contact";

var Routes = [
    {path: "", component: Home},
    {path: "home", component: Home},
    {path: "invitation", component: Invitation},
    {path: "gallery", component: Gallery},
    {path: "contact", component: Contact}
];

bootstrap(App, [provideRouter(Routes)])
    .catch(err => console.error(err));
