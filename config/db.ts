import mariadb from 'mariadb';
import { ConfigServer } from './config';

const config = new ConfigServer();

export const connection = mariadb.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'metrics_system'
});
