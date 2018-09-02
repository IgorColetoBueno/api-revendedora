"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT ? process.env.PORT : 3000;
app_1.app.listen(PORT, () => {
    console.log(`Servidor express iniciado na porta ${PORT}`);
});
//# sourceMappingURL=server.js.map