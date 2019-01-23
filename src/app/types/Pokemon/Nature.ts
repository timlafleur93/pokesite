import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";
import {NatureStatChange} from "./NatureStatChange";
import {MoveBattleStylePreference} from "./MoveBattleStylePreference";

export class Nature {
  id: number;
  name: string;
  decreased_stat: NamedAPIResource;
  increased_stat: NamedAPIResource;
  hates_flavor: NamedAPIResource;
  likes_flavor: NamedAPIResource;
  pokeathlon_stat_changes: NatureStatChange[];
  move_battle_style_preferences: MoveBattleStylePreference[];
  names: Name[];

  constructor(
    id: number,
    name: string,
    decreased_stat: NamedAPIResource,
    increased_stat: NamedAPIResource,
    hates_flavor: NamedAPIResource,
    likes_flavor: NamedAPIResource,
    pokeathlon_stat_changes: NatureStatChange[],
    move_battle_style_preferences: MoveBattleStylePreference[],
    names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.decreased_stat = decreased_stat;
    this.increased_stat = increased_stat;
    this.hates_flavor = hates_flavor;
    this.likes_flavor = likes_flavor;
    this.pokeathlon_stat_changes = pokeathlon_stat_changes;
    this.move_battle_style_preferences = move_battle_style_preferences;
    this.names = names;
  }
}
