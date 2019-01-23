import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class ContestName {
  name: string;
  color: string;
  language: NamedAPIResource;

  constructor(
    name: string,
    color: string,
    language: NamedAPIResource,
  ) {
    this.name = name;
    this.color = color;
    this.language = language;
  }
}
