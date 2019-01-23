import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {ContestType} from "../../../types/Contests/ContestType";
import {ContestEffect} from "../../../types/Contests/ContestEffect";
import {SuperContestEffect} from "../../../types/Contests/SuperContestEffect";

@Injectable({
  providedIn: 'root'
})
export class ContestControllerService {

  constructor(private http:HttpClient) { }

  public findContestType(id : string) : Observable<ContestType> {
    return this.http.get<ContestType>(urls.pokeAPI_base + urls.contest_type_url + id + '/');
  }

  public findAllContestTypes(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.contest_type_url);
  }

  public findContestEffect(id : string) : Observable<ContestEffect> {
    return this.http.get<ContestEffect>(urls.pokeAPI_base + urls.contest_effect_url + id + '/');
  }

  public findAllContestEffects(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.contest_effect_url);
  }

  public findSuperContestEffect(id : string) : Observable<SuperContestEffect> {
    return this.http.get<SuperContestEffect>(urls.pokeAPI_base + urls.super_contest_effect_url + id + '/');
  }

  public findAllSuperContestEffects(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.super_contest_effect_url);
  }

}
