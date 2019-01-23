import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {EvolutionDetail} from "./EvolutionDetail";

export class ChainLink {
  is_baby: boolean;
  species: NamedAPIResource;
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];

  constructor(
    is_baby: boolean,
    species: NamedAPIResource,
    evolution_details: EvolutionDetail[],
    evolves_to: ChainLink[],
  ) {
    this.is_baby = is_baby;
    this.species = species;
    this.evolution_details = evolution_details;
    this.evolves_to = evolves_to;
  }
}
