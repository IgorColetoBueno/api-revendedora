import {Application} from 'express'
import UserRoutes from './user';
import { app } from '../app';

export default class RouteConfig{

    private constructor(){

    }

    public static defineRoutes(app: Application):void{
        app.use("/usuarios",new UserRoutes().router)        
    }
}