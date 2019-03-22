import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logging from './middlewares/logging';
import {IController} from 'controllers/IController';
 
export class App {
  private app: express.Application;
  private port: number;
 
  constructor(controllers : IController[], port : number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(logging.logging());
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.getRouter());
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}