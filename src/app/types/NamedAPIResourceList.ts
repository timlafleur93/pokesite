import {NamedAPIResource} from "./Utility/NamedAPIResource";

export class NamedAPIResourceList {
  count: number;
  next: string;
  previous: boolean;
  results: NamedAPIResource[];

  constructor(
    count: number,
    next: string,
    previous: boolean,
    results: NamedAPIResource[],
  ) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}
