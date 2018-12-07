import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from 'morgan'
import RouteConfig from "./routes/routeConfig";
import DbConfiguration from "./config/database";

  class App {
    public app: express.Application;

    constructor() {
      this.app = express();
      this.config();
      DbConfiguration.configure()
      RouteConfig.defineRoutes(this.app);
    }

    private config(): void {
      // Configurando tipo de promise do mongoose
      require("mongoose").Promise = global.Promise;
      // Configuração do bodyParser
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(morgan('combined'))
    }
  }

  export const app = new App().app;




