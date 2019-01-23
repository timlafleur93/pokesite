import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: NamedAPIResource;

  constructor(
    is_default: boolean,
    pokemon: NamedAPIResource,
  ) {
    this.is_default = is_default;
    this.pokemon = pokemon;
  }
}
