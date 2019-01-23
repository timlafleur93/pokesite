import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class MoveFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;

  constructor(
    flavor_text: string,
    language: NamedAPIResource,
    version_group: NamedAPIResource,
  ) {
    this.flavor_text = flavor_text;
    this.language = language;
    this.version_group = version_group;
  }
}
