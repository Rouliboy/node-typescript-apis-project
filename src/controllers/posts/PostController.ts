import * as express from 'express';
import {Post} from '../../model/Post';
import {IController} from '../IController';
 
const PATH = "/api/posts";

export class PostsController implements IController {
  private router = express.Router();
 
  private posts: Post[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  private intializeRoutes() {
    this.router.get(PATH, this.getAllPosts);
    this.router.post(PATH, this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    response.status(200).send(this.posts);
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.status(201).send(post);
  }

  public getRouter() {
    return this.router;
  }
}