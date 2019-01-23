import {PokemonSpecies} from "./PokemonSpecies";
import {Name} from "../Utility/Name";
import {AwesomeName} from "./AwesomeName";

export class PokemonShape {
  id: number;
  name: string;
  awesome_names: AwesomeName[];
  names: Name[];
  pokemon_species: PokemonSpecies[];

  constructor(
    id: number,
    name: string,
    awesome_names: AwesomeName[],
    names: Name[],
    pokemon_species: PokemonSpecies[],
  ) {
    this.id = id;
    this.name = name;
    this.awesome_names = awesome_names;
    this.names = names;
    this.pokemon_species = pokemon_species;
  }
}
