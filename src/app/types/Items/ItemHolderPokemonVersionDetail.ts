import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class ItemHolderPokemonVersionDetail {
  rarity : string;
  version : NamedAPIResource;
  
  constructor(
    rarity : string,
    version : NamedAPIResource,
  ){
    this.rarity = rarity;
    this.version = version;
  }
}
