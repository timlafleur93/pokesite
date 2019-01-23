import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";

export class EncounterConditionValue {
  id: number;
  name: string;
  condition: NamedAPIResource;
  names: Name[];

  constructor(
    id: number,
    name: string,
    condition: NamedAPIResource,
    names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.condition = condition;
    this.names = names;
  }
}
