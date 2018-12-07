import {Request,Response,NextFunction} from 'express'

export default interface IReadable{
    listarTodos(req:Request, res:Response, next?:NextFunction):void;
    listarUm(req:Request, res:Response, next?:NextFunction):void;
}