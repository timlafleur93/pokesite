import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {EncounterMethod} from "../../../types/Encounters/EncounterMethod";
import {EncounterCondition} from "../../../types/Encounters/EncounterCondition";
import {EncounterConditionValue} from "../../../types/Encounters/EncounterConditionValue";

@Injectable({
  providedIn: 'root'
})
export class EncounterControllerService {

  constructor(private http:HttpClient) { }

  public findEncounterMethod(id : string) : Observable<EncounterMethod> {
    return this.http.get<EncounterMethod>(urls.pokeAPI_base + urls.encounter_method_url + id + '/');
  }

  public findAllEncounterMethods(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.encounter_method_url);
  }

  public findEncounterCondition(id : string) : Observable<EncounterCondition> {
    return this.http.get<EncounterCondition>(urls.pokeAPI_base + urls.encounter_condition_url + id + '/');
  }

  public findAllEncounterConditions(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.encounter_condition_url);
  }

  public findEncounterConditionValue(id : string) : Observable<EncounterConditionValue> {
    return this.http.get<EncounterConditionValue>(urls.pokeAPI_base + urls.encounter_condition_value_url + id + '/');
  }

  public findAllEncounterConditionValues(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.encounter_condition_value_url);
  }
}
