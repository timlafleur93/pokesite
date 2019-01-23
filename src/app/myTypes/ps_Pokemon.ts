import {Pokemon} from "../types/Pokemon/Pokemon";

export class ps_Pokemon {
  pokemon : Pokemon;
  forms : number[];
  species : number;

  constructor ( pokemonIn : Pokemon ){
    this.pokemon = pokemonIn;
    this.forms =  new Array();
    for(let i =0;i<this.pokemon.forms.length;i++){
      this.forms.push((Number(pokemonIn.forms[i].url.split('/')[6])) - 1);
    }
    this.species = Number(pokemonIn.species.url.split(('/'))[6]) - 1;
  }
}
