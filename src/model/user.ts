import { Schema, Document, model as createModel } from "mongoose";

export interface IUser {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  dataCriacao: Date;
  dataUltimaAlteracao: Date;
}

export interface IUserModel extends Document, IUser {
  hashPassword(senha: string): string;
  validatePassword(senha: string, cb: any): void;
}

export const UserSchema = new Schema({
  nome: {
    type: String,
    required: "Preencha o nome!",
    minlength: 1,
    maxlength: 40
  },
  sobrenome: {
    type: String,
    required: "Preencha o sobrenome!",
    minlength: 1,
    maxlength: 40
  },
  email: {
    type: String,
    required: "Preencha o e-mail!",
    minlength: 4,
    maxlength: 100
  },
  senha: {
    type: String,
    required: "Preencha a senha!",
    minlength: 8,
    maxlength: 100
  },
  dataCriacao: {
    type: Date,
    required: true,
    default: new Date()
  },
  dataUltimaAlteracao: {
    type: Date,
    required: true,
    default: new Date()
  }
});

export const UserModel = createModel<IUserModel>(
  "Users",
  UserSchema,
  "Users",
  false
);
