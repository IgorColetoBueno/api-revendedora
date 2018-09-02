"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const home_1 = require("./home");
class RouteConfig {
    constructor() {
    }
    static defineRoutes(app) {
        app.use("/usuarios", new user_1.default().router);
        app.use("/", new home_1.default().router);
    }
}
exports.default = RouteConfig;
//# sourceMappingURL=routeConfig.js.map