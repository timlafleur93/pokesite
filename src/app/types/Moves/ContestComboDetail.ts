import {NamedAPIResource} from "../Utility/NamedAPIResource";

export class ContestComboDetail {
  use_before: NamedAPIResource[];
  use_after: NamedAPIResource[];

  constructor(
    use_before: NamedAPIResource[],
    use_after: NamedAPIResource[],
  ) {
    this.use_before = use_before;
    this.use_after = use_after;
  }
}
