"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRoutes {
    constructor() {
        this.defineRoutes();
    }
    defineRoutes() {
        this.router = express_1.Router();
        this.router.get("/", (req, res) => {
            res.status(200).send({ message: "Deu certo trem!!!" });
        });
    }
}
exports.default = UserRoutes;
//# sourceMappingURL=user.js.map