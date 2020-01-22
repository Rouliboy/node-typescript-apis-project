import { Card } from "./Card";

export class Chance extends Card {
  public constructor(
    public status: string,
  ) {
    super();
  }
}
