import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {Move} from "../../../types/Moves/Move";
import {MoveAilment} from "../../../types/Moves/MoveAilment";
import {MoveBattleStyle} from "../../../types/Moves/MoveBattleStyle";
import {MoveCategories} from "../../../types/Moves/MoveCategories";
import {MoveDamageClasses} from "../../../types/Moves/MoveDamageClasses";
import {MoveLearnMethod} from "../../../types/Moves/MoveLearnMethod";
import {MoveTarget} from "../../../types/Moves/MoveTarget";

@Injectable({
  providedIn: 'root'
})
export class MoveControllerService {

  constructor(private http:HttpClient) { }

  public findMove(id : string) : Observable<Move> {
    return this.http.get<Move>(urls.pokeAPI_base + urls.move_url + id + '/');
  }

  public findAllMoves(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.move_url);
  }

  public findMoveAilment(id : string) : Observable<MoveAilment> {
    return this.http.get<MoveAilment>(urls.pokeAPI_base + urls.move_ailment_url + id + '/');
  }

  public findAllMoveAilments(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.move_ailment_url);
  }

  public findMoveBattleStyle(id : string) : Observable<MoveBattleStyle> {
    return this.http.get<MoveBattleStyle>(urls.pokeAPI_base + urls.move_battle_style_url + id + '/');
  }

  public findAllMoveBattleStyle(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.move_battle_style_url);
  }

  public findMoveCategories(id : string) : Observable<MoveCategories> {
    return this.http.get<MoveCategories>(urls.pokeAPI_base + urls.move_category_url + id + '/');
  }

  public findAllMoveCategories(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.move_category_url);
  }

  public findMoveDamageClasses(id : string) : Observable<MoveDamageClasses> {
    return this.http.get<MoveDamageClasses>(urls.pokeAPI_base + urls.move_damage_class_url + id + '/');
  }

  public findAllMoveDamageClasses(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.move_damage_class_url);
  }

  public findMoveLearnMethod(id : string) : Observable<MoveLearnMethod> {
    return this.http.get<MoveLearnMethod>(urls.pokeAPI_base + urls.move_learn_method + id + '/');
  }

  public findAllMoveLearnMethods(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.move_learn_method);
  }

  public findMoveTarget(id : string) : Observable<MoveTarget> {
    return this.http.get<MoveTarget>(urls.pokeAPI_base + urls.move_target + id + '/');
  }

  public findAllMoveTargets(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.move_target);
  }
}
