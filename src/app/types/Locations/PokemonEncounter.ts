import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {VersionEncounterDetail} from "../Utility/VersionEncounterDetail";

export class PokemonEncounter {
  pokemon: NamedAPIResource;
  version_details: VersionEncounterDetail[];

  constructor(
    pokemon: NamedAPIResource,
    version_details: VersionEncounterDetail[],
  ) {
    this.pokemon = pokemon;
    this.version_details = version_details;
  }
}
