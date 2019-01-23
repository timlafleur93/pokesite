import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class NatureStatAffectSets {
  increase: NamedAPIResource[];
  decrease: NamedAPIResource[];

  constructor(
    increase: NamedAPIResource[],
    decrease: NamedAPIResource[],
  ) {
    this.increase = increase;
    this.decrease = decrease;
  }
}
