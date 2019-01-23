import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {version} from "punycode";

export class PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;

  constructor(
    move_learn_method: NamedAPIResource,
    version_group: NamedAPIResource,
    level_learned_at: number,
  ) {
    this.move_learn_method = move_learn_method;
    this.version_group = version_group;
    this.level_learned_at = level_learned_at;
  }
}
