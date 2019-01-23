import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class NatureStatChange {
  max_change: number;
  pokeathlon_stat: NamedAPIResource;

  constructor(
    max_change: number,
    pokeathlon_stat: NamedAPIResource,
  ) {
    this.max_change = max_change;
    this.pokeathlon_stat = pokeathlon_stat;
  }
}
