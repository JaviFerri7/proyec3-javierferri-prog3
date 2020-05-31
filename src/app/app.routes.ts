import{RouterModule, Routes}from '@angular/router';

import { MultasComponent } from "./app-multas/app-multas.component";
import { SemperReinventComponent } from "./srt/srt.component";

const app_routes: Routes=[
  {path:'app-app-multas', component: MultasComponent},
  {path:'app-srt', component: SemperReinventComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);