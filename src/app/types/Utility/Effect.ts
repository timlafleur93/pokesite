import {NamedAPIResource} from "./NamedAPIResource";

export class Effect {
  effect: string;
  language: NamedAPIResource;

  constructor(
    effect: string,
    language: NamedAPIResource,
  ) {
    this.effect = effect;
    this.language = language;
  }
}
