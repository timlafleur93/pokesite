import {NamedAPIResource} from "./NamedAPIResource";
import {TypePokemon} from "./TypePokemon";
import {Name} from "./Name";
import {TypeRelations} from "./TypeRelations";
import {GenerationGameIndex} from "./GenerationGameIndex";

export class Type {
  id : number;
  name : string;
  dameage_relations : TypeRelations[];
  game_indices : GenerationGameIndex[];
  generaation : NamedAPIResource;
  move_damage_class : NamedAPIResource;
  names : Name[];
  pokemon: TypePokemon;
  moves : NamedAPIResource;

  constructor(
    id : number,
    name : string,
    dameage_relations : TypeRelations[],
    game_indices : GenerationGameIndex[],
    generaation : NamedAPIResource,
    move_damage_class : NamedAPIResource,
    names : Name[],
    pokemon: TypePokemon,
    moves : NamedAPIResource,
  ) {

  }



}
