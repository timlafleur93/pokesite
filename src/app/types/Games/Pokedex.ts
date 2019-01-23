import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";
import {Description} from "../Utility/Description";
import {PokemonEntry} from "./PokemonEntry";

export class Pokedex {
  id : number;
  name : string;
  is_main_series : boolean;
  descriptions : Description[];
  names : Name[];
  pokemon_entries : PokemonEntry[];
  region : NamedAPIResource;
  version_groups : NamedAPIResource;
  
  constructor(
    id : number,
  name : string,
  is_main_series : boolean,
  descriptions : Description[],
  names : Name[],
  pokemon_entries : PokemonEntry[],
  region : NamedAPIResource,
  version_groups : NamedAPIResource,
  ){
    this.id = id;
    this.name = name;
    this.is_main_series = is_main_series;
    this.descriptions = descriptions;
    this.names = names;
    this.pokemon_entries = pokemon_entries;
    this.region = region;
    this.version_groups = version_groups;
  }
}
