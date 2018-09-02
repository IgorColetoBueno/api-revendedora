import {Application} from 'express'
import UserRoutes from './user';
import { app } from '../app';
import HomeRoutes from './home';

export default class RouteConfig{

    private constructor(){

    }

    public static defineRoutes(app: Application):void{
        app.use("/usuarios",new UserRoutes().router) 
        app.use("/",new HomeRoutes().router) 
    }
}