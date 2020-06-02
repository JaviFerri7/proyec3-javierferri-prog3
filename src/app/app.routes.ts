import{RouterModule, Routes}from '@angular/router';

import { AppMultasComponent } from "./app-multas/app-multas.component";
import { SrtComponent } from "./srt/srt.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
 
const app_routes: Routes=[
  {path:'app-app-multas', component: AppMultasComponent},
  {path:'app-srt', component: SrtComponent},
  {path:'app-contact', component:ContactComponent}
  {path:'app-home', component:HomeComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);