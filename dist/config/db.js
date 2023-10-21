"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mariadb_1 = __importDefault(require("mariadb"));
const config_1 = require("./config");
const config = new config_1.ConfigServer();
exports.connection = mariadb_1.default.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'metrics_system'
});
