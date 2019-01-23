import {PokemonAbility} from "./PokemonAbility";
import {VersionGameIndex} from "../Utility/VersionGameIndex";
import {PokemonHeldItem} from "./PokemonHeldItem";
import {PokemonSprites} from "./PokemonSprites";
import {PokemonType} from "./PokemonType";
import {PokemonStat} from "./PokemonStat";
import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {PokemonMove} from "./PokemonMove";

export class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];

  constructor(
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: PokemonAbility[],
    forms: NamedAPIResource[],
    game_indices: VersionGameIndex[],
    held_items: PokemonHeldItem[],
    location_area_encounters: string,
    moves: PokemonMove[],
    sprites: PokemonSprites,
    species: NamedAPIResource,
    stats: PokemonStat[],
    types: PokemonType[],
  ) {
    this.id = id;
    this.name = name;
    this.base_experience = base_experience;
    this.height = height;
    this.is_default = is_default;
    this.order = order;
    this.weight = weight;
    this.abilities = abilities;
    this.forms = forms;
    this.game_indices = game_indices;
    this.held_items = held_items;
    this.location_area_encounters = location_area_encounters;
    this.moves = moves;
    this.sprites = sprites;
    this.species = species;
    this.stats = stats;
    this.types = types;
  }

  public get_forms_indices() : number[] {
    let indices : number[];
    indices =  new Array();
    for(let i =0;i<this.forms.length;i++){
      indices.push((Number(this.forms[i].url.split('/')[6])) - 1);
    }
    return indices;
  }

  public get_species_index() : number {
    return Number(this.species.url.split(('/'))[6]) - 1;
  }
}
