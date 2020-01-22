import { Box } from "./box/Box";
import { Player } from "./Player";

export class Game {
  constructor(
    private boxes: Array<Box>,
    private players: Array<Player>
  ) {
  }

  public getBoxes(): Array<Box> {
    return this.boxes;
  }

  public getPlayers(): Array<Player> {
    return this.players;
  }

}
