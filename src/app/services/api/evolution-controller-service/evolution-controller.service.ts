import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {EvolutionChain} from "../../../types/Evolution/EvolutionChain";
import {EvolutionTrigger} from "../../../types/Evolution/EvolutionTrigger";


@Injectable({
  providedIn: 'root'
})
export class EvolutionControllerService {

  constructor(private http:HttpClient) { }

  public findEvolutionChain(id : string) : Observable<EvolutionChain> {
    return this.http.get<EvolutionChain>(urls.pokeAPI_base + urls.evolution_chain_url + id + '/');
  }

  public findAllEvolutionChains(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.evolution_chain_url);
  }

  public findEvolutionTrigger(id : string) : Observable<EvolutionTrigger> {
    return this.http.get<EvolutionTrigger>(urls.pokeAPI_base + urls.evolution_trigger_url + id + '/');
  }

  public findAllEvolutionTriggers(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.evolution_trigger_url);
  }

}
