import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PokemonSpeciesGender {
  rate: number;
  pokemon_species: NamedAPIResource;

  constructor(
    rate: number,
    pokemon_species: NamedAPIResource,
  ) {
    this.rate = rate;
    this.pokemon_species = pokemon_species;
  }
}
