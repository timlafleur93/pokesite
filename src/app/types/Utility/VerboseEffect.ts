import {NamedAPIResource} from "./NamedAPIResource";

export class VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;

  constructor(
    effect: string,
    short_effect: string,
    language: NamedAPIResource,
  ) {
    this.effect = effect;
    this.short_effect = short_effect;
    this.language = language;
  }
}
