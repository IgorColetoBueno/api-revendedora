import { Router, Request, Response } from "express";
import { UserDAO } from '../model/DAO/user';

export default class UserRoutes {
  public router: Router;
  public userDAO = new UserDAO()

  constructor() {
    this.defineRoutes();
  }

  defineRoutes(): any {
    this.router = Router();
    this.router.get("/", this.userDAO.listarTodos)
    this.router.get("/:id", this.userDAO.listarUm)
  }
}
