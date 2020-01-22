import { Box } from "./Box";
import { Int } from "../../Int";
import { Player } from "model/game/Player";

export class Property extends Box {

  private owner: Player;

  public constructor(
    index: Int,
    name: string
  ) {
    super(index, name);
    this.owner = null;
  }

  public getOwner(): Player {
    return this.owner;
  }
  public setOwner(value: Player) {
    this.owner = value;
  }
}
