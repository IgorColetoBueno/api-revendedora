"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routeConfig_1 = require("./routes/routeConfig");
class App {
    constructor() {
        this.app = express();
        this.config();
        routeConfig_1.default.defineRoutes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.app = new App().app;
//# sourceMappingURL=app.js.map