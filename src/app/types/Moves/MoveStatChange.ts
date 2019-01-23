import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class MoveStatChange {
  change: number;
  stat: NamedAPIResource;

  constructor(
    change: number,
    stat: NamedAPIResource,
  ) {
    this.change = change;
    this.stat = stat;
  }
}
