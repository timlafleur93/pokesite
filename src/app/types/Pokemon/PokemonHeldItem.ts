import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {PokemonHeldItemVersion} from "./PokemonHeldItemVersion";

export class PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];

  constructor(
    item: NamedAPIResource,
    version_details: PokemonHeldItemVersion[],
  ) {
    this.item = item;
    this.version_details = version_details;
  }
}
