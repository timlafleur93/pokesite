import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class NaturePokeathlonStatAffect {
  max_change: number;
  nature: NamedAPIResource;

  constructor(
    max_change: number,
    nature: NamedAPIResource,
  ) {
    this.max_change = max_change;
    this.nature = nature;
  }
}
