import {Name} from "../Utility/Name";
import {NaturePokeathlonStatAffectSets} from "./NaturePokeathlonStatAffectSets";

export class PokeathlonStat {
  id: number;
  name: string;
  names: Name[];
  affecting_natures: NaturePokeathlonStatAffectSets;

  constructor(
    id: number,
    name: string,
    names: Name[],
    affecting_natures: NaturePokeathlonStatAffectSets,
  ) {
    this.id = id;
    this.name = name;
    this.names = names;
    this.affecting_natures = affecting_natures;
  }
}
