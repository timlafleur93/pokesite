import {NamedAPIResource} from "./NamedAPIResource";
import {GenerationGameIndex} from "./GenerationGameIndex";
import {Name} from "./Name";

export class Region {
  id: number;
  name: string;
  region: NamedAPIResource;
  names: Name[];
  game_indices: GenerationGameIndex;
  areas: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    region: NamedAPIResource,
    names: Name[],
    game_indices: GenerationGameIndex,
    areas: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
     this.region = region;
     this.names = names;
     this.game_indices = game_indices;
     this.areas = areas;
  }
}
