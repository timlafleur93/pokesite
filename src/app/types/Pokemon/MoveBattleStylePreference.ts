import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class MoveBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: NamedAPIResource;

  constructor(
    low_hp_preference: number,
    high_hp_preference: number,
    move_battle_style: NamedAPIResource,
  ) {
    this.low_hp_preference = low_hp_preference;
    this.high_hp_preference = high_hp_preference;
    this.move_battle_style = move_battle_style;
  }
}
