import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class MoveAilment {
  ailment: NamedAPIResource;
  category: NamedAPIResource;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance : number;
  stat_chance: number;

  constructor(
    ailment: NamedAPIResource,
    category: NamedAPIResource,
    min_hits: number,
    max_hits: number,
    min_turns: number,
    max_turns: number,
    drain: number,
    healing: number,
    crit_rate: number,
    ailment_chance: number,
    flinch_chance : number,
    stat_chance: number,
  ) {
    this.ailment = ailment;
    this.category = category;
    this.min_hits = min_hits;
    this.max_hits = max_hits;
    this.min_turns = min_turns;
    this.max_turns = max_turns;
    this.drain = drain;
    this.healing = healing;
    this.crit_rate = crit_rate;
    this.ailment_chance = ailment_chance;
    this.flinch_chance = flinch_chance;
    this.stat_chance = stat_chance;
  }

}
