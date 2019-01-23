import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";
import {PokemonFormSprites} from "./PokemonFormSprites";

export class PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource;
  sprites: PokemonFormSprites;
  version_group: NamedAPIResource;
  names: Name[];
  form_names: Name[];

  constructor(
    id: number,
    name: string,
    order: number,
    form_order: number,
    is_default: boolean,
    is_battle_only: boolean,
    is_mega: boolean,
    form_name: string,
    pokemon: NamedAPIResource,
    sprites: PokemonFormSprites,
    version_group: NamedAPIResource,
    names: Name[],
    form_names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.form_order = form_order;
    this.is_default = is_default;
    this.is_battle_only = is_battle_only;
    this.is_mega = is_mega;
    this.form_name = form_name;
    this.sprites = sprites;
    this.version_group = version_group;
    this.names = names;
    this.form_names = form_names;
  }
}
