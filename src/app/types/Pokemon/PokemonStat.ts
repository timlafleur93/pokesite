import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_state: number;

  constructor(
    stat: NamedAPIResource,
    effort: number,
    base_state: number,
  ) {
    this.stat = stat;
    this.effort = effort;
    this.base_state = base_state;
  }
}
