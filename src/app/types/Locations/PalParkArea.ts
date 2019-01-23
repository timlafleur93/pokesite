import {Name} from "../Utility/Name";
import {PalParkEncounterSpecies} from "./PalParkEncounterSpecies";

export class PalParkArea {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PalParkEncounterSpecies[];

  constructor(
    id: number,
    name: string,
    names: Name[],
    pokemon_encounters: PalParkEncounterSpecies[],
  ) {
    this.id = id;
    this.name = name;
    this.names = names;
    this.pokemon_encounters = pokemon_encounters;
  }
}
