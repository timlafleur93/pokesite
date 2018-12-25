import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {Pokemon} from "../../../types/Pokemon";
import {urls} from "../../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class PokemonControllerService {

  constructor(private http:HttpClient) { }

  url : string = urls.pokeAPI_base + urls.pokemon_url;

  public find(id : number) : Observable<object> {
    return this.http.get<object>(this.url + id);
  }

  public findAll(limit:number, offset:number) : Observable<object[]> {
    return this.http.get<object[]>(this.url)
  }
}
