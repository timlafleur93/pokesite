import {NamedAPIResource} from "../Utility/NamedAPIResource";
import {ChainLink} from "./ChainLink";

export class EvolutionChain {
  id: number;
  baby_trigger_item: NamedAPIResource;
  chain: ChainLink;

  constructor(
    id: number,
    baby_trigger_item: NamedAPIResource,
    chain: ChainLink,
  ) {
    this.id = id;
    this.baby_trigger_item = baby_trigger_item;
    this.chain = chain;
  }
}
