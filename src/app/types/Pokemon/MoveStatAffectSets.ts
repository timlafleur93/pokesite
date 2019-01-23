import {MoveStatAffect} from "./MoveStatAffect";

export class MoveStatAffectSets {
  increase: MoveStatAffect[];
  decrease: MoveStatAffect[];

  constructor(
    increase: MoveStatAffect[],
    decrease: MoveStatAffect[],
  ) {
    this.increase = increase;
    this.decrease = decrease;
  }
}
