import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: NamedAPIResource;
  move_learn_methods: NamedAPIResource[];
  pokedexes: NamedAPIResource[];
  regions: NamedAPIResource[];
  versions: NamedAPIResource[];

  constructor(
    id: number,
    name: string,
    order: number,
    generation: NamedAPIResource,
    move_learn_methods: NamedAPIResource[],
    pokedexes: NamedAPIResource[],
    regions: NamedAPIResource[],
    versions: NamedAPIResource[],
  ) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.generation = generation;
    this.move_learn_methods = move_learn_methods;
    this.pokedexes = pokedexes;
    this.regions = regions;
    this.versions = versions;
  }
}
