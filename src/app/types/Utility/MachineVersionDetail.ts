import {APIResource} from "./APIResource";
import {NamedAPIResource} from "./NamedAPIResource";

export class MachineVersionDetail {
  machine: APIResource;
  version_group: NamedAPIResource;

  constructor(
    machine: APIResource,
    version_group: NamedAPIResource,
  ) {
    this.machine = machine;
    this.version_group = version_group;
  }
}
