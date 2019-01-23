import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {PokemonSpeciesGender} from "./PokemonSpeciesGender";

export class Gender {
  id: number;
  name: string;
  pokemon_species_details: PokemonSpeciesGender[];
  required_for_evolution: NamedAPIResource[];

  constructor(
    id: number,
    name: string,
    pokemon_species_details: PokemonSpeciesGender[],
    required_for_evolution: NamedAPIResource[],
  ) {
    this.id = id;
    this.name = name;
    this.pokemon_species_details = pokemon_species_details;
    this.required_for_evolution = required_for_evolution;
  }
}
