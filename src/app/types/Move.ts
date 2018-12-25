import {NamedAPIResource} from "./NamedAPIResource";
import {ContestComboSets} from "./ContestComboSets";

export class Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_comboes: ContestComboSets;
  contest_type: NamedAPIResource;
  contest_effect: NamedAPIResource;
  damage_class: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    accuracy: number,
    effect_chance: number,
    pp: number,
    priority: number,
    power: number,
    contest_comboes: ContestComboSets,
    contest_type: NamedAPIResource,
    contest_effect: NamedAPIResource,
    damage_class: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
    this.accuracy = accuracy;
    this.effect_chance = effect_chance;
    this.pp = pp;
    this.priority = priority;
    this.power = power;
    this.contest_comboes = contest_comboes;

  }
}
