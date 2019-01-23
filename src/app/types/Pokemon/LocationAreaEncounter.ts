import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {VersionEncounterDetail} from "../Utility/VersionEncounterDetail";

export class LocationAreaEncounter {
  location_area : NamedAPIResource;
  version_details : VersionEncounterDetail[];
  
  constructor(
    location_area : NamedAPIResource,
    version_details : VersionEncounterDetail[],
  ){
    this.location_area = location_area;
    this.version_details = version_details;
  }
}
