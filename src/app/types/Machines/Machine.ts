import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class Machine {
  id: number;
  item: NamedAPIResource;
  move: NamedAPIResource;
  version_group: NamedAPIResource;

  constructor(
    id: number,
    item: NamedAPIResource,
    move: NamedAPIResource,
    version_group: NamedAPIResource,
  ) {
    this.id = id;
    this.item = item;
    this.move = move;
    this.version_group = version_group;
  }
}
