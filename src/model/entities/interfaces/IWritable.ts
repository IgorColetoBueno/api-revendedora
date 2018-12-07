import {Request,Response,NextFunction} from 'express'

export default interface IWritable{
    inserir(req:Request, res:Response, next?:NextFunction):void;
    alterar(req:Request, res:Response, next?:NextFunction):void;
}