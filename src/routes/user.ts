import { Router, Request, Response } from "express";

export default class UserRoutes {
  public router: Router;

  constructor() {
    this.defineRoutes();
  }

  defineRoutes(): any {
    this.router = Router();
    this.router.get("/", (req:Request, res:Response) => {
        res.status(200).send({message:"Deu certo trem!!!"})
    })
  }
}
