import {Ability} from "./Ability";
import {Name} from "./Name";
import {Type} from "./Type";
import {Region} from "./Region";
import {VersionGroup} from "./VersionGroup";
import {Move} from "./Move";
import {PokemonSpecies} from "./PokemonSpecies";

export class Generation {
  id : number;
  name : string;
  abilities : Ability[];
  names : Name;
  main_region : Region;
  moves : Move[];
  pokemon_species : PokemonSpecies;
  types : Type;
  version_groups : VersionGroup;

  constructor(
    id : number,
    name : string,
    abilities : Ability[],
    names : Name,
    main_region : Region,
    moves : Move[],
    pokemon_species : PokemonSpecies,
    types : Type,
    version_groups : VersionGroup
  ){
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
