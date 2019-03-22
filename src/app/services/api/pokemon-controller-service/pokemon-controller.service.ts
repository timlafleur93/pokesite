import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {urls} from "../../../urls/urls";
import {APIResourceList} from "../../../types/APIResourceList";
import {Pokemon} from "../../../types/Pokemon/Pokemon";
import {Ability} from "../../../types/Pokemon/Ability";
import {Characteristic} from "../../../types/Pokemon/Characteristic";
import {EggGroup} from "../../../types/Pokemon/EggGroup";
import {Gender} from "../../../types/Pokemon/Gender";
import {GrowthRate} from "../../../types/Pokemon/GrowthRate";
import {Nature} from "../../../types/Pokemon/Nature";
import {PokeathlonStat} from "../../../types/Pokemon/PokeathlonStat";
import {PokemonColor} from "../../../types/Pokemon/PokemonColor";
import {PokemonForm} from "../../../types/Pokemon/PokemonForm";
import {PokemonHabitat} from "../../../types/Pokemon/PokemonHabitat";
import {PokemonShape} from "../../../types/Pokemon/PokemonShape";
import {PokemonSpecies} from "../../../types/Pokemon/PokemonSpecies";
import {Stat} from "../../../types/Pokemon/Stat";
import {Type} from "../../../types/Pokemon/Type";
import {Language} from "../../../types/Utility/Language";

@Injectable({
  providedIn: 'root'
})
export class PokemonControllerService {

  constructor(private http:HttpClient) { }

  public findPokemon(id : string) : Observable<Pokemon> {
    return this.http.get<Pokemon>(urls.pokeAPI_base + urls.pokemon_url + id + '/');
  }

  public findAllPokemon(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.pokemon_url);
  }

  public saveAllPokemon(apiResourceList : APIResourceList) : Observable<any>{
    return this.http.post('http://localhost:8080/api-resource-list-api/save-api-resource-list', apiResourceList);
  }

  public findAbility(id : string) : Observable<Ability> {
    return this.http.get<Ability>(urls.pokeAPI_base + urls.ability_url + id + '/');
  }

  public findAllAbilities(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.ability_url);
  }

  public findCharacteristic(id : string) : Observable<Characteristic> {
    return this.http.get<Characteristic>(urls.pokeAPI_base + urls.characteristic_url + id + '/');
  }

  public findAllCharacteristics(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.characteristic_url);
  }

  public findEggGroup(id : string) : Observable<EggGroup> {
    return this.http.get<EggGroup>(urls.pokeAPI_base + urls.egg_group_url + id + '/');
  }

  public findAllEggGroups(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.egg_group_url);
  }

  public findGender(id : string) : Observable<Gender> {
    return this.http.get<Gender>(urls.pokeAPI_base + urls.gender_url + id + '/');
  }

  public findAllGenders(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.gender_url);
  }

  public findGrowthRate(id : string) : Observable<GrowthRate> {
    return this.http.get<GrowthRate>(urls.pokeAPI_base + urls.growth_rate_url + id + '/');
  }

  public findAllGrowthRates(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.growth_rate_url);
  }

  public findNature(id : string) : Observable<Nature> {
    return this.http.get<Nature>(urls.pokeAPI_base + urls.natures_url + id + '/');
  }

  public findAllNatures(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.natures_url);
  }

  public findPokeathlonStat(id : string) : Observable<PokeathlonStat> {
    return this.http.get<PokeathlonStat>(urls.pokeAPI_base + urls.pokeathlon_stat_url + id + '/');
  }

  public findAllPokeathlonStats(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.pokeathlon_stat_url);
  }

  public findPokemonColor(id : string) : Observable<PokemonColor> {
    return this.http.get<PokemonColor>(urls.pokeAPI_base + urls.pokemon_color_url + id + '/');
  }

  public findAllPokemonColors(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.pokemon_color_url);
  }

  public findPokemonForm(id : string) : Observable<PokemonForm> {
    return this.http.get<PokemonForm>(urls.pokeAPI_base + urls.pokemon_form_url + id + '/');
  }

  public findAllPokemonForms(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.pokemon_form_url);
  }

  public findPokemonHabitat(id : string) : Observable<PokemonHabitat> {
    return this.http.get<PokemonHabitat>(urls.pokeAPI_base + urls.pokemon_habitat_url + id + '/');
  }

  public findAllPokemonHabitats(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.pokemon_habitat_url);
  }

  public findPokemonShape(id : string) : Observable<PokemonShape> {
    return this.http.get<PokemonShape>(urls.pokeAPI_base + urls.pokemon_shape_url + id + '/');
  }

  public findAllPokemonShapes(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.pokemon_shape_url);
  }

  public findPokemonSpecies(id : string) : Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(urls.pokeAPI_base + urls.pokemon_species_url + id + '/');
  }

  public findAllPokemonSpecies(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.pokemon_species_url);
  }

  public findStat(id : string) : Observable<Stat> {
    return this.http.get<Stat>(urls.pokeAPI_base + urls.stat_url + id + '/');
  }

  public findAllStats(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.stat_url);
  }

  public findType(id : string) : Observable<Type> {
    return this.http.get<Type>(urls.pokeAPI_base + urls.type_url + id + '/');
  }

  public findAllTypes(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.type_url);
  }

  public findLanguage(id : string) : Observable<Language> {
    return this.http.get<Language>(urls.pokeAPI_base + urls.language_url + id + '/');
  }

  public findAllLanguages(limit : number, offset:number) : Observable<APIResourceList> {
    return this.http.get<APIResourceList>(urls.pokeAPI_base + urls.language_url);
  }
}
