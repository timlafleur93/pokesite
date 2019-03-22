import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokedexComponent} from "./components/pokedex/pokedex.component";

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
