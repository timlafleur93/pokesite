import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {PokemonMoveVersion} from "./PokemonMoveVersion";

export class PokemonMove {
  move : NamedAPIResource;
  version_group_details : PokemonMoveVersion[];

  constructor(
    move : NamedAPIResource,
    version_group_details : PokemonMoveVersion[],
  ){
    this.move = move;
    this.version_group_details = version_group_details;
  }
}
