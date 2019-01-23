import {NamedAPIResource} from "./NamedAPIResource";

export class VersionGroupFlavorText {
  text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;

  constructor(
    text: string,
    language: NamedAPIResource,
    version_group: NamedAPIResource,
  ) {
    this.text = text;
    this.language = language;
    this.version_group = version_group;
  }
}
