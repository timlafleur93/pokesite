import {NaturePokeathlonStatAffect} from "./NaturePokeathlonStatAffect";

export class NaturePokeathlonStatAffectSets {
  increase: NaturePokeathlonStatAffect[];
  decrease: NaturePokeathlonStatAffect[];

  constructor(
    increase: NaturePokeathlonStatAffect[],
    decrease: NaturePokeathlonStatAffect[],
  ) {
    this.increase = increase;
    this.decrease = decrease;
  }
}
