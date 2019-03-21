import {App} from './app';
import {PostsController} from './controllers/posts/posts.controller';
 
const app = new App(
  [
    new PostsController(),
  ],
  8080,
);
 
app.listen();