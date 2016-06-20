import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter} from "@angular/router";

import {App} from "./components/app";
import {Home} from "./components/home/home";

var Routes = [
    {path: "", component: Home}
];

bootstrap(App, [provideRouter(Routes)])
    .catch(err => console.error(err));
