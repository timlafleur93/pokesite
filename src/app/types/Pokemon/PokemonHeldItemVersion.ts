import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PokemonHeldItemVersion {
  version: NamedAPIResource;
  version_details: number;

  constructor(
    version: NamedAPIResource,
    version_details: number,
  ) {
    this.version = version;
    this.version_details = version_details;
  }
}
