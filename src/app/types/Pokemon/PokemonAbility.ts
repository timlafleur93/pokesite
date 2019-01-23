import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;

  constructor(
    is_hidden: boolean,
    slot: number,
    ability: NamedAPIResource,
  ) {
    this.is_hidden = is_hidden;
    this.slot = slot;
    this.ability = ability;
  }
}
