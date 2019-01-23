import {NamedAPIResource} from "./NamedAPIResource";

export class FlavorText {
  flavor_text : string;
  language : NamedAPIResource;
  
  constructor(
    flavor_text : string,
    language : NamedAPIResource,
  ) {
    this.flavor_text = flavor_text;
    this.language = language;
  }
}
