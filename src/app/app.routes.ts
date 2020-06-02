import{RouterModule, Routes}from '@angular/router';

import { AppMultasComponent } from "./app-multas/app-multas.component";
import { SrtComponent } from "./srt/srt.component";
import { ContactComponent } from "./contact/contact.component";
 
const app_routes: Routes=[
  {path:'app-app-multas', component: AppMultasComponent},
  {path:'app-srt', component: SrtComponent},
  {path:'app-contact', component:ContactComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);