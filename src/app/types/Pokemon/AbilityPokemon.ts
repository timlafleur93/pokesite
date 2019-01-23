import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource;

  constructor(
    is_hidden: boolean,
    slot: number,
    pokemon: NamedAPIResource,
  ) {
    this.is_hidden = is_hidden;
    this.slot = slot;
    this.pokemon = pokemon;
  }
}
