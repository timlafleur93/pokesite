import {NamedAPIResource} from "./NamedAPIResource";

export class Encounter {
  min_level: number;
  max_level: number;
  condition_values: NamedAPIResource[];
  chance: number;
  method: NamedAPIResource;

  constructor(
    min_level: number,
    max_level: number,
    condition_values: NamedAPIResource[],
    chance: number,
    method: NamedAPIResource,
  ) {
    this.min_level = min_level;
    this.max_level = max_level;
    this.condition_values = condition_values;
    this.chance = chance;
    this.method = method;
  }
}
