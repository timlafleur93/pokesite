import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: NamedAPIResource;

  constructor(
    entry_number: number,
    pokedex: NamedAPIResource,
  ) {
    this.entry_number = entry_number;
    this.pokedex = pokedex;
  }
}
