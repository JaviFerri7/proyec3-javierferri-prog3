import{RouterModule, Routes}from '@angular/router';

import { multasComponent } from ".//app-multas.component.html";
import { srtComponent } from "./srt/srt.component.html";

const app_routes: Routes=[
  {path:'app-app-multas', component: multasComponent},
  {path:'app-srt', component: srtComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);