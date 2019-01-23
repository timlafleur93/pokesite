import {APIResource} from "../Utility/APIResource";
import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";
import {NatureStatAffectSets} from "./NatureStatAffectSets";
import {MoveStatAffectSets} from "./MoveStatAffectSets";

export class Stat {
  id : number;
  name : string;
  game_index : number;
  is_battle_only : boolean;
  affecting_moves : MoveStatAffectSets;
  affecting_natures : NatureStatAffectSets;
  characteristics : APIResource;
  move_damage_class : NamedAPIResource;
  names : Name[];
  
  constructor(
    id : number,
  name : string,
  game_index : number,
  is_battle_only : boolean,
  affecting_moves : MoveStatAffectSets,
  affecting_natures : NatureStatAffectSets,
  characteristics : APIResource,
  move_damage_class : NamedAPIResource,
  names : Name[],
  ){
    this.id = id;
    this.name = name;
    this.game_index = game_index;
    this.is_battle_only = is_battle_only;
    this.affecting_moves = affecting_moves;
    this.affecting_natures = affecting_natures;
    this.characteristics = characteristics;
    this.move_damage_class = move_damage_class;
    this.names = names;
  }
}
