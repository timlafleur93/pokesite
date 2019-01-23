import {Name} from "../Utility/Name";
import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class Version {
  id: number;
  name: string;
  names: Name[];
  version_group: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    names: Name[],
    version_group: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
    this.names = names;
    this.version_group = version_group;
  }
}
