import {ItemHolderPokemonVersionDetail} from "./ItemHolderPokemonVersionDetail";

export class ItemHolderPokemon {
  pokemon: string;
  version_details: ItemHolderPokemonVersionDetail;

  constructor(
    pokemon: string,
    version_details: ItemHolderPokemonVersionDetail,
  ) {
    this.pokemon = pokemon;
    this.version_details = version_details;
  }
}
