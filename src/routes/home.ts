import { Router, Request, Response } from "express";

export default class HomeRoutes {
  public router: Router;

  constructor() {
    this.defineRoutes();
  }

  defineRoutes(): any {
    this.router = Router();
    this.router.get("/user", (req:Request, res:Response) => {
        res.status(200).send(`<h1>Bem vindo(a) a API de Revendedoras!</h1>`);
    })
  }
}
