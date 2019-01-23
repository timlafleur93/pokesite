import {Name} from "./Name";

export class Language {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: Name[];

  constructor(
    id: number,
    name: string,
    official: boolean,
    iso639: string,
    iso3166: string,
    names: Name[],
  ) {
    this.id = id;
    this.name = name;
    this.official = official;
    this.iso639 = iso639;
    this.iso3166 = iso3166;
    this.names = names;
  }
}
