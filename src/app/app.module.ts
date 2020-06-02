import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SrtComponent } from './srt/srt.component';
import { AppMultasComponent } from './app-multas/app-multas.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, app_routing ],
  declarations: [ AppComponent, HelloComponent, SrtComponent, AppMultasComponent, ContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
