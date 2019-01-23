import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";

export class BerryFirmness {
  id: number;
  name: string;
  berries: NamedAPIResource;
  names: Name[];

  constructor(
    id: number,
    name: string,
    berries: NamedAPIResource,
    names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.berries = berries;
    this.names = names;
  }
}
