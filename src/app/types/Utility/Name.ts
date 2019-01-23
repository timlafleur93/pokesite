import {NamedAPIResource} from "./NamedAPIResource";

export class Name {
  name: string;
  language: NamedAPIResource;

  constructor(
    name: string,
    language: NamedAPIResource,
  ) {
    this.name = name;
    this.language = language;
  }
}
