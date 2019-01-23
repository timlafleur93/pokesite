import {Generation} from "../Games/Generation";
import {NamedAPIResource} from "./NamedAPIResource";

export class GenerationGameIndex {
  game_index: number;
  generation: NamedAPIResource;

  constructor(
    game_index: number,
    generation: NamedAPIResource,
  ) {
    this.game_index = game_index;
    this.generation = generation;
  }
}
