import {Description} from "../Utility/Description";
import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class MoveCategories {
  id: number;
  name: string;
  moves: NamedAPIResource[];
  descriptions: Description[];

  constructor(
    id: number,
    name: string,
    moves: NamedAPIResource[],
    descriptions: Description[],
  ) {
    this.id = id;
    this.name = name;
    this.moves = moves;
    this.descriptions = descriptions;
  }
}
