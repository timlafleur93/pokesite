import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {Name} from "../Utility/Name";
import {EncounterMethodRate} from "./EncounterMethodRate";
import {PokemonEncounter} from "./PokemonEncounter";

export class LocationArea {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: NamedAPIResource;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];

  constructor(
    id: number,
    name: string,
    game_index: number,
    encounter_method_rates: EncounterMethodRate[],
    location: NamedAPIResource,
    names: Name[],
    pokemon_encounters: PokemonEncounter[],
  ) {
    this.id = id;
    this.name = name;
    this.game_index = game_index;
    this.encounter_method_rates = encounter_method_rates;
    this.location = location;
    this.names = names;
    this.pokemon_encounters = pokemon_encounters;
  }
}
