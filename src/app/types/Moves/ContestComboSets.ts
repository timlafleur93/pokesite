import {ContestComboDetail} from "./ContestComboDetail";

export class ContestComboSets {
  normal: ContestComboDetail;
  super: ContestComboDetail;

  constructor(
    normal : ContestComboDetail,
    super2 : ContestComboDetail,
  ) {
    this.normal = normal;
    this.super = super2;
  }
}
