import { Injectable } from '@angular/core';
import {Pokemon} from "../../../types/Pokemon";
import {PokemonControllerService} from "../pokemon-controller-service/pokemon-controller.service";

@Injectable({
  providedIn: 'root'
})
export class CachedDataService {

  private _cached_pokemon : object[];
  private temp : object;

  constructor(
    private pokemonService : PokemonControllerService,
  )
  {
      this.pokemonService.findAll(1,1).subscribe(
        response => {
          this.temp = response;
          console.log(this.temp);
        }
      );



  }


  set cached_pokemon(value: Pokemon[]) {
    this._cached_pokemon = value;
  }
}
