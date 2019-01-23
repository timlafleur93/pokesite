import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";

export class ItemPocket {
  id : number;
  name : string;
  categories : NamedAPIResource[];
  names : Name[];
  
  constructor(
    id : number,
  name : string,
  categories : NamedAPIResource[],
  names : Name[],
  ){
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.names = names;
  }
}
