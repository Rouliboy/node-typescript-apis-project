import * as express from 'express';
import { IController } from '../IController';

const PATH = "/api/dices";

export class DiceController implements IController {
  private router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(PATH, this.launchDices);
  }

  launchDices = (request: express.Request, response: express.Response) => {
    response.status(200).send(this.launchOneDice() + "|" + this.launchOneDice());
  }

  public getRouter() {
    return this.router;
  }

  private launchOneDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}