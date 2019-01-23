import {Name} from "../Utility/Name";

export class MoveBattleStyle {
  id: number;
  name: string;
  names: Name[];

  constructor(
    id: number,
    name: string,
    names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.names = names;
  }
}
