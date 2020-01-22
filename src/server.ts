import { App } from './app';
import { PostsController } from './controllers/posts/PostController';
import { DiceController } from './controllers/posts/DiceController';
import { GameController } from './controllers/posts/GameController';

const app = new App(
  [
    new PostsController(),
    new DiceController(),
    new GameController()
  ],
  5000,
);

app.listen();