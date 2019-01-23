import {NamedAPIResource} from "./NamedAPIResource";

export class Description {
  description : string;
  language : NamedAPIResource;
  
  constructor(
    description : string,
    language : NamedAPIResource,
  ){
    this.description = description;
    this.language = language;
  }
}
