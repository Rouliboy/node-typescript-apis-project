import { Int } from "../../Int";
import { Player } from "../Player";

export abstract class Box {

  private players: Array<Player>

  constructor(
    private index: Int,
    private name: string
  ) {
    this.players = new Array<Player>();
  }

  public getIndex(): Int {
    return this.index;
  }

  public getName(): string {
    return this.name;
  }

  public arriveOnBox(player: Player): void {

    console.log('[arriveOnBox] Check if player is on box');
    if (this.players.indexOf(player) === -1) {
      console.log('Add player to box');
      this.players.push(player);
    }
  }

  public leaveBox(player: Player): void {

    const index = this.players.indexOf(player, 0);
    if (index > -1) {
      console.log('[leaveBox] player leaves box');
      this.players.splice(index, 1);
    }
  }
}
