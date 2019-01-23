import {NamedAPIResource} from "../Utility/NamedAPIResource";



export class FlavorBerryMap {
  potency: number;
  berry: NamedAPIResource;

  constructor(
    potency: number,
    berry: NamedAPIResource,
  ) {
    this.potency = potency;
    this.berry = berry;
  }
}
