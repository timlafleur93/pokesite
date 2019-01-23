import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {EncounterVersionDetails} from "./EncounterVersionDetails";

export class EncounterMethodRate {
  encounter_method: NamedAPIResource;
  version_details: EncounterVersionDetails[];

  constructor(
    encounter_method: NamedAPIResource,
    version_details: EncounterVersionDetails[],
  ) {
    this.encounter_method = encounter_method;
    this.version_details = version_details;
  }
}
