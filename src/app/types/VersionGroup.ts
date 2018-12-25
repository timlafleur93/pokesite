import {NamedAPIResource} from "./NamedAPIResource";

export class VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    order: number,
    generation: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.generation = generation;
  }
}
