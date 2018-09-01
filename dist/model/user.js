"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    nome: {
        type: String,
        required: "Preencha o nome!",
        minlength: 1,
        maxlength: 40
    },
    sobrenome: {
        type: String,
        required: "Preencha o sobrenome!",
        minlength: 1,
        maxlength: 40
    },
    email: {
        type: String,
        required: "Preencha o e-mail!",
        minlength: 4,
        maxlength: 100
    },
    senha: {
        type: String,
        required: "Preencha a senha!",
        minlength: 8,
        maxlength: 100
    },
    dataCriacao: {
        type: Date,
        required: true,
        default: new Date()
    },
    dataUltimaAlteracao: {
        type: Date,
        required: true,
        default: new Date()
    }
});
exports.UserModel = mongoose_1.model("Users", exports.UserSchema, "Users", false);
//# sourceMappingURL=user.js.map