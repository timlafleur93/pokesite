import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";
import {AbilityEffectChange} from "./AbilityEffectChange";
import {AbilityPokemon} from "./AbilityPokemon";
import {AbilityFlavorText} from "./AbilityFlavorText";

export class Ability {

  id : number;
  name : string;
  is_main_series : boolean;
  generation : NamedAPIResource;
  names : Name[];
  effect_entries : Name[];
  effect_changes : AbilityEffectChange[];
  flavor_text_entries : AbilityFlavorText[];
  pokemon : AbilityPokemon[];

  constructor(
    id : number,
    name : string,
    is_main_series : boolean,
    generation : NamedAPIResource,
    names : Name[],
    effect_entries : Name[],
    effect_changes : AbilityEffectChange[],
    flavor_text_entries : AbilityFlavorText[],
    pokemon : AbilityPokemon[],
  ){
    this.id = id;
    this.name = name;
    this.is_main_series = is_main_series;
    this.generation = generation;
    this.names = names;
    this.effect_entries = effect_entries;
    this.effect_changes = effect_changes;
    this.flavor_text_entries = flavor_text_entries;
    this.pokemon = pokemon;
  }
}
