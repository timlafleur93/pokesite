import {Effect} from "../Utility/Effect";
import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class ItemFlingEffect {
  id: number;
  name: string;
  effect_entries: Effect[];
  items: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    effect_entries: Effect[],
    items: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
    this.effect_entries = effect_entries;
    this.items = items;
  }
}
