import {Ability} from "../Pokemon/Ability";
import {Name} from "../Utility/Name";
import {Type} from "../Pokemon/Type";
import {Region} from "../Locations/Region";
import {VersionGroup} from "./VersionGroup";
import {Move} from "../Moves/Move";
import {PokemonSpecies} from "../Pokemon/PokemonSpecies";

export class Generation {
  id: number;
  name: string;
  abilities: Ability[];
  names: Name;
  main_region: Region;
  moves: Move[];
  pokemon_species: PokemonSpecies;
  types: Type;
  version_groups: VersionGroup;

  constructor(
    id: number,
    name: string,
    abilities: Ability[],
    names: Name,
    main_region: Region,
    moves: Move[],
    pokemon_species: PokemonSpecies,
    types: Type,
    version_groups: VersionGroup
  ) {
    this.id = id;
    this.name = name;
    this.abilities = abilities;
    this.names = names;
    this.main_region = main_region;
    this.moves = moves;
    this.pokemon_species = pokemon_species;
    this.types = types;
    this.version_groups = version_groups;
  }
}
