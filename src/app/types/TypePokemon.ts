import {NamedAPIResource} from "./NamedAPIResource";

export class TypePokemon {
  slot :  number;
  pokemon : NamedAPIResource;

  constructor(
    slot :  number,
    pokemon : NamedAPIResource,
  ) {
    this.slot = slot;
    this.pokemon = pokemon;
  }
}
