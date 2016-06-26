import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@angular/router";

import {App} from "./components/app";
import {Home} from "./components/home/home";
import {Contact} from "./components/contact/contact";

var Routes = [
    {path: "", component: Home},
    {path: "home", component: Home},
    {path: "contact", component: Contact}
];

bootstrap(App, [provideRouter(Routes)])
    .catch(err => console.error(err));
