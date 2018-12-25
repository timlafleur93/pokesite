import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {PokemonControllerService} from "./services/api/pokemon-controller-service/pokemon-controller.service";
import {CachedDataService} from "./services/api/cache/cached-data.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PokemonControllerService,
    CachedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
