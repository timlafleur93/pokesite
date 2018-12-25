import {Generation} from "./Generation";

export class GenerationGameIndex {
  game_index : number;
  generation : Generation;
  
  constructor(
    game_index : number,
    generation : Generation,
  ) {
    this.game_index = game_index;
    this.generation = generation;
  }
}
