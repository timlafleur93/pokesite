import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class EvolutionDetail {
  item: NamedAPIResource;
  trigger: NamedAPIResource;
  gender: number;
  held_item: NamedAPIResource;
  known_move: NamedAPIResource;
  known_move_type: NamedAPIResource;
  location: NamedAPIResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource;
  party_type: NamedAPIResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedAPIResource;
  turn_upside_down: boolean;

  constructor(
    item: NamedAPIResource,
    trigger: NamedAPIResource,
    gender: number,
    held_item: NamedAPIResource,
    known_move: NamedAPIResource,
    known_move_type: NamedAPIResource,
    location: NamedAPIResource,
    min_level: number,
    min_happiness: number,
    min_beauty: number,
    min_affection: number,
    needs_overworld_rain: boolean,
    party_species: NamedAPIResource,
    party_type: NamedAPIResource,
    relative_physical_stats: number,
    time_of_day: string,
    trade_species: NamedAPIResource,
    turn_upside_down: boolean,
  ) {
    this.item = item;
    this.trigger = trigger;
    this.gender = gender;
    this.held_item = held_item;
    this.known_move = known_move;
    this.known_move_type = known_move_type;
    this.location = location;
    this.min_level = min_level;
    this.min_happiness = min_happiness;
    this.min_beauty = min_beauty;
    this.min_affection = min_affection;
    this.needs_overworld_rain = needs_overworld_rain;
    this.party_species = party_species;
    this.party_type = party_type;
    this.relative_physical_stats = relative_physical_stats;
    this.time_of_day = time_of_day;
    this.trade_species = trade_species;
    this.turn_upside_down = turn_upside_down;
  }
}
