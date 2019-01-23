import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";
import {FlavorBerryMap} from "./FlavorBerryMap";

export class BerryFlavor {
  id: number;
  name: string;
  berries: FlavorBerryMap[];
  contest_type: NamedAPIResource;
  names: Name[];

  constructor(
    id: number,
    name: string,
    berries: FlavorBerryMap[],
    contest_type: NamedAPIResource,
    names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.berries = berries;
    this.contest_type = contest_type;
    this.names = names;
  }
}
