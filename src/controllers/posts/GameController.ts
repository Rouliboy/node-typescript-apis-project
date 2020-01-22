import * as express from 'express';
import { IController } from '../IController';
import { Box } from '../../model/game/box/Box';
import { Start } from '../../model/game/box/Start';
import { roundToInt, Int } from '../../model/Int';
import { Property } from '../../model/game/box/Property';
import { Tax } from '../../model/game/box/Tax';
import { Player } from '../../model/game/Player';
import { BankNote } from '../../model/BankNote';
import { Game } from '../../model/game/Game';

const PATH = "/api/game";

export class GameController implements IController {
  private router = express.Router();

  private player1: Player = new Player("player1", [new BankNote(roundToInt(100))]);
  private player2: Player = new Player("player2", [new BankNote(roundToInt(100))]);
  private player3: Player = new Player("player3", [new BankNote(roundToInt(100))]);
  private player4: Player = new Player("player4", [new BankNote(roundToInt(100))]);

  private players: Array<Player>;

  private boxes: Array<Box>;
  private boxStart: Box;
  private box2: Box;
  private box3: Box;
  private box4: Box;
  private box5: Box;

  private game: Game;

  constructor() {
    this.intializeRoutes();
    this.players = new Array<Player>();
    this.players.push(this.player1)
    this.players.push(this.player2)
    this.players.push(this.player3)
    this.players.push(this.player4)
    console.log(`this.players=${this.players}`)

    var boxIndex: number = 0;
    this.boxStart = new Start(roundToInt(boxIndex++));
    this.box2 = new Property(roundToInt(boxIndex++), "A");
    this.box3 = new Property(roundToInt(boxIndex++), "B");
    this.box4 = new Property(roundToInt(boxIndex++), "C");
    this.box5 = new Tax(roundToInt(boxIndex++), "Tax1", roundToInt(500));
  }

  private intializeRoutes() {
    this.router.get(PATH + '/init', this.initGame);
    this.router.get(PATH + '/view', this.viewGame);
    this.router.get(PATH + '/play/:player', this.play);
    this.router.get(PATH + '/set', this.setTest);
  }

  initGame = (request: express.Request, response: express.Response) => {

    this.boxes = [
      this.boxStart,
      this.box2,
      this.box3,
      this.box4,
      this.box5
    ];

    this.boxStart.arriveOnBox(this.player1);
    this.boxStart.arriveOnBox(this.player2);
    this.boxStart.arriveOnBox(this.player3);
    this.boxStart.arriveOnBox(this.player4);

    this.game = new Game(this.boxes, this.players);
    response.status(200).send(this.game);
  }

  viewGame = (request: express.Request, response: express.Response) => {
    response.status(200).send(this.game);
  }

  play = (request: express.Request, response: express.Response) => {
    var player: string = request.params.player;
    var dice = 1;

    console.log(`player=${player}`);
    response.status(200).send(player);
  }

  setTest = (request: express.Request, response: express.Response) => {
    var value: Set<string> = new Set<string>();
    value.add("A");
    value.add("B");

    console.dir(value)

    response.status(200).send(JSON.stringify(value));
  }

  public getRouter() {
    return this.router;
  }

  // private getBoxIndex(player: Player) {
  //   var index = -1;
  //   this.boxes.find(element => element.);
  // }

}