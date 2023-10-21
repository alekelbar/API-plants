
export class ConfigServer {

    getEnvironments(k: string): string {
        return process.env[k] || "";
    }

    get databasePath(): string {
        return this.getEnvironments("DB_PATH");
    }

    get databaseUser(): string {
        return this.getEnvironments("DB_USER");
    }

    get databasePassword(): string {
        return this.getEnvironments("DB_PASSWORD");
    }

    get systemPort(): string {
        return this.getEnvironments("PORT");
    }
}
