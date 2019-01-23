import {APIResource} from "./Utility/APIResource";

export class APIResourceList {
  count: number;
  next: string;
  previous: boolean;
  results: APIResource[];

  constructor(
    count: number,
    next: string,
    previous: boolean,
    results: APIResource[],
  ) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}
