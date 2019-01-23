import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class BerryFlavorMap {
  potency : number;
  flavor : NamedAPIResource;
  
  constructor(
    potency : number,
    flavor : NamedAPIResource,
  ){
    this.potency = potency;
    this.flavor = flavor;
  }
}
