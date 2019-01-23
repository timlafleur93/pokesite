import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";
import {Description} from "../Utility/Description";

export class MoveLearnMethod {
  id: number;
  name: string;
  descriptions: Description[];
  names: Name[];
  version_groups: NamedAPIResource[];

  constructor(
    id: number,
    name: string,
    descriptions: Description[],
    names: Name[],
    version_groups: NamedAPIResource[],
  ) {
    this.id = id;
    this.name = name;
    this.descriptions = descriptions;
    this.names = names;
    this.version_groups = version_groups;
  }
}
