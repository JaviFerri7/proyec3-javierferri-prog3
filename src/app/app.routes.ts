import{RouterModule, Routes}from '@angular/router';

import { AppMultasComponent } from "./app-multas/app-multas.component";
import { SrtComponent } from "./srt/srt.component";

const app_routes: Routes=[
  {path:'app-app-multas', component: AppMultasComponent},
  {path:'app-srt', component: AppMultasComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);