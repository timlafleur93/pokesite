import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {APIResource} from "../Utility/APIResource";
import {Name} from "../Utility/Name";
import {PokemonSpeciesDexEntry} from "./PokemonSpeciesDexEntry";
import {PalParkEncounterArea} from "./PalParkEncounterArea";
import {FlavorText} from "../Utility/FlavorText";
import {Description} from "../Utility/Description";
import {Genus} from "./Genus";
import {PokemonSpeciesVariety} from "./PokemonSpeciesVariety";

export class PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedAPIResource;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: NamedAPIResource[];
  color: NamedAPIResource;
  shaped: NamedAPIResource;
  evolves_from_species: NamedAPIResource;
  evolution_chain: APIResource;
  habitat: NamedAPIResource;
  generation: NamedAPIResource;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];

  constructor(
    id: number,
    name: string,
    order: number,
    gender_rate: number,
    capture_rate: number,
    base_happiness: number,
    is_baby: boolean,
    hatch_counter: number,
    has_gender_differences: boolean,
    forms_switchable: boolean,
    growth_rate: NamedAPIResource,
    pokedex_numbers: PokemonSpeciesDexEntry[],
    egg_groups: NamedAPIResource[],
    color: NamedAPIResource,
    shaped: NamedAPIResource,
    evolves_from_species: NamedAPIResource,
    evolution_chain: APIResource,
    habitat: NamedAPIResource,
    generation: NamedAPIResource,
    names: Name[],
    pal_park_encounters: PalParkEncounterArea[],
    flavor_text_entries: FlavorText[],
    form_descriptions: Description[],
    genera: Genus[],
    varieties: PokemonSpeciesVariety[],
  ) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.gender_rate = gender_rate;
    this.capture_rate = capture_rate;
    this.base_happiness = base_happiness;
    this.is_baby = is_baby;
    this.hatch_counter = hatch_counter;
    this.has_gender_differences = has_gender_differences;
    this.forms_switchable = forms_switchable;
    this.growth_rate = growth_rate;
    this.pokedex_numbers = pokedex_numbers;
    this.egg_groups = egg_groups;
    this.color = color;
    this.shaped = shaped;
    this.evolves_from_species = evolves_from_species;
    this.evolution_chain = evolution_chain;
    this.habitat = habitat;
    this.generation = generation;
    this.names = names;
    this.pal_park_encounters = pal_park_encounters;
    this.flavor_text_entries = flavor_text_entries;
    this.form_descriptions = form_descriptions;
    this.genera = genera;
    this.varieties = varieties;
  }

}
