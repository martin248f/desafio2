import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamburguesasComponent } from './hamburguesas/hamburguesas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { HeladosComponent } from './helados/helados.component';
import { MediosdepagoComponent } from './mediosdepago/mediosdepago.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamburguesasComponent,
    BebidasComponent,
    HeladosComponent,
    MediosdepagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
