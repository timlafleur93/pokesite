import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Effect} from "../Utility/Effect";

export class AbilityEffectChange {
  effect_entries: Effect[];
  version_group: NamedAPIResource;

  constructor(
    effect_entries: Effect[],
    version_group: NamedAPIResource,
  ) {
    this.effect_entries = effect_entries;
    this.version_group = version_group;
  }
}
