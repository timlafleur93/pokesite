import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";

export class EncounterCondition {
  id: number;
  name: string;
  names: Name[];
  values: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    names: Name[],
    values: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
    this.names = names;
    this.values = values;
  }
}
