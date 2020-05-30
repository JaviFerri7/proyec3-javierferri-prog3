import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { SrtComponent } from './srt/srt.component';
import { AppMultasComponent } from './app-multas/app-multas.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UserScreenComponent, SrtComponent, AppMultasComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
