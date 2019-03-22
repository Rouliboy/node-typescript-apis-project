import * as express from 'express';

export interface IController {
    getRouter(): express.Router;
}