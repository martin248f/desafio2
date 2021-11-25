import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasComponent } from './bebidas/bebidas.component';
import { HamburguesasComponent } from './hamburguesas/hamburguesas.component';
import { HeaderComponent } from './header/header.component';
import { HeladosComponent } from './helados/helados.component';
import { MediosdepagoComponent } from './mediosdepago/mediosdepago.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'hamburguesas',component:HamburguesasComponent},
  {path:'bebidas',component:BebidasComponent},
  {path:'helados',component:HeladosComponent},
  {path:'mediosdepago',component:MediosdepagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
