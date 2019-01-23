import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {TypePokemon} from "./TypePokemon";
import {Name} from "../Utility/Name";
import {TypeRelations} from "./TypeRelations";
import {GenerationGameIndex} from "../Utility/GenerationGameIndex";

export class Type {
  id : number;
  name : string;
  damage_relations : TypeRelations[];
  game_indices : GenerationGameIndex[];
  generation : NamedAPIResource;
  move_damage_class : NamedAPIResource;
  names : Name[];
  pokemon: TypePokemon[];
  moves : NamedAPIResource[];

  constructor(
    id : number,
    name : string,
    damage_relations : TypeRelations[],
    game_indices : GenerationGameIndex[],
    generaation : NamedAPIResource,
    move_damage_class : NamedAPIResource,
    names : Name[],
    pokemon: TypePokemon[],
    moves : NamedAPIResource[],
  ) {
    this.id = id;
    this.name = name;
    this.damage_relations = damage_relations;
    this.game_indices = game_indices;
    this.generation = generaation;
    this.move_damage_class = move_damage_class;
    this.names = names;
    this.pokemon = pokemon;
    this.moves = moves;
  }



}
