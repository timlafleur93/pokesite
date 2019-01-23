export class PokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;

  constructor(
    front_default: string,
    front_shiny: string,
    back_default: string,
    back_shiny: string,
  ) {
    this.front_default = front_default;
    this.front_shiny = front_shiny;
    this.back_default = back_default;
    this.back_shiny = back_shiny;
  }
}
