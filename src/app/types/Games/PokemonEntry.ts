import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PokemonEntry {
  entry_number: number;
  pokemon_species: NamedAPIResource;

  constructor(
    entry_number: number,
    pokemon_species: NamedAPIResource,
  ) {
    this.entry_number = entry_number;
    this.pokemon_species = pokemon_species;
  }
}
