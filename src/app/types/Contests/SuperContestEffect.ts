import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {FlavorText} from "../Utility/FlavorText";

export class SuperContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: FlavorText[];
  moves: NamedAPIResource;

  constructor(
    id: number,
    appeal: number,
    flavor_text_entries: FlavorText[],
    moves: NamedAPIResource,
  ) {
    this.id = id;
    this.appeal = appeal;
    this.flavor_text_entries = flavor_text_entries;
    this.moves = moves;
  }
}
