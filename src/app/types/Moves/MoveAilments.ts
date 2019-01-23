import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";

/// MoveAilment mapped in API
export class MoveAilments {
  id: number;
  name: string;
  moves: NamedAPIResource;
  names: Name[];

  constructor(
    id: number,
    name: string,
    moves: NamedAPIResource,
    names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.moves = moves;
    this.names = names;
  }
}
