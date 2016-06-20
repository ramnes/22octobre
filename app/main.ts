import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@angular/router";

import {App} from "./components/app";

var Routes = [
    {path: "", component: App}
];

bootstrap(App, [provideRouter(Routes)])
    .catch(err => console.error(err));
