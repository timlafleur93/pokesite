import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";


export class ItemCategory {
  id: number;
  name: string;
  items: NamedAPIResource[];
  names: Name[];
  pocket: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    items: NamedAPIResource[],
    names: Name[],
    pocket: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
    this.items = items;
    this.names = names;
    this.pocket = pocket;
  }
}
