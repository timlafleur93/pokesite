import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class EncounterVersionDetails {
  rate: number;
  version: NamedAPIResource;

  constructor(
    rate: number,
    version: NamedAPIResource,
  ) {
    this.rate = rate;
    this.version = version;
  }
}
