import {Description} from "../Utility/Description";
import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";

export class MoveDamageClasses {
  id: number;
  name: string;
  descriptions: Description[];
  moves: NamedAPIResource[];
  names: Name[];

  constructor(
    id: number,
    name: string,
    descriptions: Description[],
    moves: NamedAPIResource[],
    names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.descriptions = descriptions;
    this.moves = moves;
    this.names = names;
  }
}
