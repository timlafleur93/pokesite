import {ContestComboSets} from "./ContestComboSets";
import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {APIResource} from "../Utility/APIResource";
import {AbilityEffectChange} from "../Pokemon/AbilityEffectChange";
import {Name} from "../Utility/Name";
import {MoveStatChange} from "./MoveStatChange";
import {MoveFlavorText} from "./MoveFlavorText";
import {MachineVersionDetail} from "../Utility/MachineVersionDetail";
import {MoveMetaData} from "../MoveMetaData";
import {PastMoveStatValues} from "./PastMoveStatValues";

class VerboseEffect {
}

export class Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: ContestComboSets;
  contest_type: NamedAPIResource;
  contest_effect: APIResource;
  damage_class: NamedAPIResource;
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: MoveFlavorText[];
  generation: NamedAPIResource;
  machines: MachineVersionDetail[];
  meta: MoveMetaData;
  names: Name[];
  past_values: PastMoveStatValues[];
  stat_changes: MoveStatChange[];
  super_contest_effect: APIResource;
  target: NamedAPIResource;
  type: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    accuracy: number,
    effect_chance: number,
    pp: number,
    priority: number,
    power: number,
    contest_combos: ContestComboSets,
    contest_type: NamedAPIResource,
    contest_effect: APIResource,
    damage_class: NamedAPIResource,
    effect_entries: VerboseEffect[],
    effect_changes: AbilityEffectChange[],
    flavor_text_entries: MoveFlavorText[],
    generation: NamedAPIResource,
    machines: MachineVersionDetail[],
    meta: MoveMetaData,
    names: Name[],
    past_values: PastMoveStatValues[],
    stat_changes: MoveStatChange[],
    super_contest_effect: APIResource,
    target: NamedAPIResource,
    type: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
    this.accuracy = accuracy;
    this.effect_chance = effect_chance;
    this.pp = pp;
    this.priority = priority;
    this.power = power;
    this.contest_combos = contest_combos;
    this.contest_type = contest_type;
    this.contest_effect = contest_effect;
    this.damage_class = damage_class;
    this.effect_entries = effect_entries;
    this.effect_changes = effect_changes;
    this.flavor_text_entries = flavor_text_entries;
    this.generation = generation;
    this.machines = machines;
    this.meta = meta;
    this.names = names;
    this.past_values = past_values;
    this.stat_changes = stat_changes;
    this.super_contest_effect = super_contest_effect;
    this.target = target;
    this.type = type;
  }
}
