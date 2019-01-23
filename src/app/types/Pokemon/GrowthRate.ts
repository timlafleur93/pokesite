import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Description} from "../Utility/Description";
import {GrowthRateExperienceLevel} from "./GrowthRateExperienceLevel";

export class GrowthRate {
  id: number;
  name: string;
  formula: string;
  descriptions: Description[];
  levels: GrowthRateExperienceLevel[];
  pokemon_species: NamedAPIResource[];

  constructor(
    id: number,
    name: string,
    formula: string,
    descriptions: Description[],
    levels: GrowthRateExperienceLevel[],
    pokemon_species: NamedAPIResource[],
  ) {
    this.id = id;
    this.name = name;
    this.formula = formula;
    this.descriptions = descriptions;
    this.levels = levels;
    this.pokemon_species = pokemon_species;
  }
}
