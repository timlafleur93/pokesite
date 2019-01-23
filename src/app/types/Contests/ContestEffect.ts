import {Effect} from "../Utility/Effect";
import {FlavorText} from "../Utility/FlavorText";

export class ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: Effect[];
  flavor_text_entries: FlavorText[];

  constructor(
    id: number,
    appeal: number,
    jam: number,
    effect_entries: Effect[],
    flavor_text_entries: FlavorText[],
  ) {
    this.id = id;
    this.appeal = appeal;
    this.jam = jam;
    this.effect_entries = effect_entries;
    this.flavor_text_entries = flavor_text_entries;
  }
}
