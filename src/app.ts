import * as express from "express";
import * as bodyParser from "body-parser";
import RouteConfig from "./routes/routeConfig";

  class App {
    public app: express.Application;

    constructor() {
      this.app = express();
      this.config();
      RouteConfig.defineRoutes(this.app);
    }

    private config(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
    }
  }

  export const app = new App().app;




