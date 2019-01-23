import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {Berry} from "../../../types/Berries/Berry";
import {BerryFirmness} from "../../../types/Berries/BerryFirmness";
import {BerryFlavor} from "../../../types/Berries/BerryFlavor";


@Injectable({
  providedIn: 'root'
})
export class BerryControllerService {

  constructor(private http:HttpClient){ }

  public findBerry(id : string) : Observable<Berry> {
    return this.http.get<Berry>(urls.pokeAPI_base + urls.berry_url + id + '/');
  }

  public findAllBerries(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.berry_url);
  }

  public findBerryFirmness(id : string) : Observable<BerryFirmness> {
    return this.http.get<BerryFirmness>(urls.pokeAPI_base + urls.berry_firmness_url + id + '/');
  }

  public findAllBerryFirmnesses(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.berry_firmness_url);
  }

  public findBerryFlavor(id : string) : Observable<BerryFlavor> {
    return this.http.get<BerryFlavor>(urls.pokeAPI_base + urls.berry_flavor_url+ id + '/');
  }

  public findAllBerryFlavors(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.berry_flavor_url);
  }
}
