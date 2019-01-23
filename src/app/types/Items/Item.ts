import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {VerboseEffect} from "../Utility/VerboseEffect";
import {GenerationGameIndex} from "../Utility/GenerationGameIndex";
import {Name} from "../Utility/Name";
import {APIResource} from "../Utility/APIResource";
import {MachineVersionDetail} from "../Utility/MachineVersionDetail";
import {ItemHolderPokemon} from "./ItemHolderPokemon";
import {ItemSprites} from "./ItemSprites";
import {ItemCategory} from "./ItemCategory";
import {VersionGroupFlavorText} from "../Utility/VersionGroupFlavorText";

export class Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: NamedAPIResource;
  attributes: NamedAPIResource[];
  category: ItemCategory;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: APIResource;
  machines: MachineVersionDetail[];

  constructor(
    id: number,
    name: string,
    cost: number,
    fling_power: number,
    fling_effect: NamedAPIResource,
    attributes: NamedAPIResource[],
    category: ItemCategory,
    effect_entries: VerboseEffect[],
    flavor_text_entries: VersionGroupFlavorText[],
    game_indices: GenerationGameIndex[],
    names: Name[],
    sprites: ItemSprites,
    held_by_pokemon: ItemHolderPokemon[],
    baby_trigger_for: APIResource,
    machines: MachineVersionDetail[],
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.fling_power = fling_power;
    this.fling_effect = fling_effect;
    this.attributes = attributes;
    this.category = category;
    this.effect_entries = effect_entries;
    this.flavor_text_entries = flavor_text_entries;
    this.game_indices = game_indices;
    this.names = names;
    this.sprites = sprites;
    this.held_by_pokemon = held_by_pokemon;
    this.baby_trigger_for = baby_trigger_for;
    this.machines = machines;
  }
}
