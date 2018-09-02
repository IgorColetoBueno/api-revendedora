"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class HomeRoutes {
    constructor() {
        this.defineRoutes();
    }
    defineRoutes() {
        this.router = express_1.Router();
        this.router.get("/", (req, res) => {
            res.status(200).send(`<h1>Bem vindo(a) a API de Revendedoras!</h1>`);
        });
    }
}
exports.default = HomeRoutes;
//# sourceMappingURL=home.js.map