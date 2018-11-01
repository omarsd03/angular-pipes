import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeMx from "@angular/common/locales/es-MX";

registerLocaleData(localeMx);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-MX" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
