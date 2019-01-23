import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PalParkEncounterSpecies {
  base_score: number;
  rate: number;
  pokemon_species: NamedAPIResource;

  constructor(
    base_score: number,
    rate: number,
    pokemon_species: NamedAPIResource,
  ) {
    this.base_score = base_score;
    this.rate = rate;
    this.pokemon_species = pokemon_species;
  }
}
