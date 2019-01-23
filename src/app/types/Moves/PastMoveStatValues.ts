import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {VerboseEffect} from "../Utility/VerboseEffect";

export class PastMoveStatValues {
  accuracy: PastMoveStatValues;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: VerboseEffect[];
  type: NamedAPIResource;
  version_group: NamedAPIResource;

  constructor(
    accuracy: PastMoveStatValues,
    effect_chance: number,
    power: number,
    pp: number,
    effect_entries: VerboseEffect[],
    type: NamedAPIResource,
    version_group: NamedAPIResource,
  ) {
    this.accuracy = accuracy;
    this.effect_chance = effect_chance;
    this.power = power;
    this.pp = pp;
    this.effect_entries = effect_entries;
    this.type = type;
    this.version_group = version_group;
  }
}
