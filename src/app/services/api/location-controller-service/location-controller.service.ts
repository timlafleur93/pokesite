import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {Region} from "../../../types/Locations/Region";
import {LocationArea} from "../../../types/Locations/LocationArea";
import {PalParkArea} from "../../../types/Locations/PalParkArea";

@Injectable({
  providedIn: 'root'
})
export class LocationControllerService {

  constructor(private http:HttpClient) { }

  public findLocation(id : string) : Observable<Location> {
    return this.http.get<Location>(urls.pokeAPI_base + urls.locations_url + id + '/');
  }

  public findAllLocations(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.locations_url);
  }

  public findLocationArea(id : string) : Observable<LocationArea> {
    return this.http.get<LocationArea>(urls.pokeAPI_base + urls.locations_area_url + id + '/');
  }

  public findAllLocationAreas(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.locations_area_url);
  }

  public findPalParkArea(id : string) : Observable<PalParkArea> {
    return this.http.get<PalParkArea>(urls.pokeAPI_base + urls.pal_park_area_url + id + '/');
  }

  public findAllPalParkAreas(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.pal_park_area_url);
  }

  public findRegion(id : string) : Observable<Region> {
    return this.http.get<Region>(urls.pokeAPI_base + urls.region_url + id + '/');
  }

  public findAllRegions(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.region_url);
  }
}
