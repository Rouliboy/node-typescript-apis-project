import { Box } from "./Box";
import { Int } from "../../Int";

export class Tax extends Box {
  public constructor(
    index: Int,
    name: string,
    private amount: Int
  ) {
    super(index, name);
  }

  public getAmount(): Int {
    return this.amount;
  }

}
