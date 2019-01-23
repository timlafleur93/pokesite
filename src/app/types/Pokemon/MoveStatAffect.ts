import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class MoveStatAffect {
  change : number;
  move : NamedAPIResource;
  
  constructor(
    change : number,
    move : NamedAPIResource,
  ){
    this.change = change;
    this.move = move;
  }
}
