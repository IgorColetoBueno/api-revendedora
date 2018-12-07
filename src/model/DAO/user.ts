import IReadable from "../entities/interfaces/IReadable";
import IWritable from "../entities/interfaces/IWritable";
import { Request, Response } from "express";
import { IUserModel, IUser, UserModel, IUserRequest } from "../entities/user";
import {
  PaginationResponse,
  HttpStatusCode,
  PaginationParams
} from "../entities/interfaces/HttpHandlers";

export class UserDAO implements IReadable, IWritable {
  async inserir(req: Request, res: Response): Promise<void> {
    let objeto = new UserModel(req.body as IUserModel);
    try {
      let response = await objeto.save();
      res.status(HttpStatusCode.CREATED).send(response);
    } catch (error) {
      res.send(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error);
    }
  }
  async alterar(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const body = req.params.body;

    try {
      const response = await UserModel.findByIdAndUpdate(id, body, {
        new: true
      });

      res.status(HttpStatusCode.UPDATED).send(response);
    } catch (error) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  async listarTodos(req: Request, res: Response): Promise<void> {
    const { limit, skip }: PaginationParams = req.body;

    try {
      const data = await UserModel.find()
        .skip(skip)
        .limit(limit);
      const numberOfRows = await UserModel.count({});

      const responseBody = {
        numberOfRows,
        data
      } as PaginationResponse<IUserModel>;

      res.status(HttpStatusCode.OK).send(responseBody);
    } catch (error) {
      res.send(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  listarUm(req: Request, res: Response): void {
    const id: number = req.body.id;
    if (!id) {
      res.status(HttpStatusCode.BAD_REQUEST).json({});
    }
    UserModel.findById(id, (err: Error, result: IUser) => {
      if (err) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(err);
      }

      return res.status(HttpStatusCode.OK).send(result);
    });
  }
}
