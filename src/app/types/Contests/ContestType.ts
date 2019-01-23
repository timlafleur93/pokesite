import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {ContestName} from "./ContestName";

export class ContestType {
  id: number;
  name: string;
  berry_flavor: NamedAPIResource;
  names: ContestName;

  constructor(
    id: number,
    name: string,
    berry_flavor: NamedAPIResource,
    names: ContestName,
  ) {
    this.id = id;
    this.name = name;
    this.berry_flavor = berry_flavor;
    this.names = names;
  }
}
