import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class Genus {
  genus: string;
  language: NamedAPIResource;

  constructor(
    genus: string,
    language: NamedAPIResource,
  ) {
    this.genus = genus;
    this.language = language;
  }
}
