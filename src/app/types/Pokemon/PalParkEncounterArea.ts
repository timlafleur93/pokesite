import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: NamedAPIResource;

  constructor(
    base_score: number,
    rate: number,
    area: NamedAPIResource,
  ) {
    this.base_score = base_score;
    this.rate = rate;
    this.area = area;
  }
}
