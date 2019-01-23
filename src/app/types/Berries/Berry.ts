import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {max} from "rxjs/operators";
import {BerryFlavorMap} from "./BerryFlavorMap";

export class Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NamedAPIResource;
  flavors: BerryFlavorMap[];
  item: NamedAPIResource;
  natural_gift_type: NamedAPIResource;

  constructor(
    id: number,
    name: string,
    growth_time: number,
    max_harvest: number,
    natural_gift_power: number,
    size: number,
    smoothness: number,
    soil_dryness: number,
    firmness: NamedAPIResource,
    flavors: BerryFlavorMap[],
    item: NamedAPIResource,
    natural_gift_type: NamedAPIResource,
  ) {
    this.id = id;
    this.name = name;
    this.growth_time = growth_time;
    this.max_harvest = max_harvest;
    this.natural_gift_power = natural_gift_power;
    this.size = size;
    this.smoothness = smoothness;
    this.soil_dryness = soil_dryness;
    this.firmness = firmness;
    this.flavors = flavors;
    this.item = item;
    this.natural_gift_type = natural_gift_type;

  }
}
