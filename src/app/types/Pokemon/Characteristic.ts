export class Characteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];

  constructor(
    id: number,
    gene_modulo: number,
    possible_values: number[],
  ) {
    this.id = id;
    this.gene_modulo = gene_modulo;
    this.possible_values = possible_values;
  }
}
