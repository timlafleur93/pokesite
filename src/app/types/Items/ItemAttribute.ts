import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Description} from "../Utility/Description";
import {Name} from "../Utility/Name";

export class ItemAttribute {
  id: number;
  name: string;
  items: NamedAPIResource[];
  names: Name[];
  descriptions: Description[];

  constructor(
    id: number,
    name: string,
    items: NamedAPIResource[],
    names: Name[],
    descriptions: Description[],
  ) {
    this.id = id;
    this.name = name;
    this.items = items;
    this.names = names;
    this.descriptions = descriptions;
  }
}
