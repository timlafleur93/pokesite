import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";

export class PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];

  constructor(
    id: number,
    name: string,
    names: Name[],
    pokemon_species: NamedAPIResource[],
  ) {
    this.id = id;
    this.name = name;
    this.names = names;
    this.pokemon_species = pokemon_species;
  }
}
