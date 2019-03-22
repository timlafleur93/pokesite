import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {CachedDataService} from "./services/api/cache/cached-data.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import {FormsModule} from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    CachedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
