import {NamedAPIResource} from "./NamedAPIResource";
import {Encounter} from "./Encounter";

export class VersionEncounterDetail {
  version : NamedAPIResource;
  max_chance : number;
  encounter_details : Encounter[];
}
