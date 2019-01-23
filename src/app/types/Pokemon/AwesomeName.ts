import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class AwesomeName {
  awesome_name: string;
  language: NamedAPIResource;

  constructor(
    awesome_name: string,
    language: NamedAPIResource,
  ) {
    this.awesome_name = awesome_name;
    this.language = language;
  }
}
