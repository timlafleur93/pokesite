import {NamedAPIResource} from "./NamedAPIResource";

export class TypeRelations {
  no_damage_to : NamedAPIResource;
  half_damage_to : NamedAPIResource;
  double_damage_to : NamedAPIResource;
  no_damage_from : NamedAPIResource;
  half_damage_from : NamedAPIResource;
  double_damage_from : NamedAPIResource;

  constructor(
    no_damage_to : NamedAPIResource,
    half_damage_to : NamedAPIResource,
    double_damage_to : NamedAPIResource,
    no_damage_from : NamedAPIResource,
    half_damage_from : NamedAPIResource,
    double_damage_from : NamedAPIResource,
  ) {
    this.no_damage_to = no_damage_to;
    this.half_damage_to = half_damage_to;
    this.double_damage_to = double_damage_to;
    this.no_damage_from = no_damage_from;
    this.half_damage_from = half_damage_from;
    this.double_damage_from = double_damage_from;
  }
}
