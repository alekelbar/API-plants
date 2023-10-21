"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = void 0;
class ConfigServer {
    getEnvironments(k) {
        return process.env[k] || "";
    }
    get databasePath() {
        return this.getEnvironments("DB_PATH");
    }
    get databaseUser() {
        return this.getEnvironments("DB_USER");
    }
    get databasePassword() {
        return this.getEnvironments("DB_PASSWORD");
    }
    get systemPort() {
        return this.getEnvironments("PORT");
    }
}
exports.ConfigServer = ConfigServer;
