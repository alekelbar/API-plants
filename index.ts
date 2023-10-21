import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();

import { connection } from './config/db';

const app: Express = express();

app.use(cors());

const port = process.env.PORT;

app.get('/api/plants', async (req: Request, res: Response) => {
    try {
        const result = await connection.query('SELECT * FROM metrics'); ``
        res.send(result);
    } catch (err) {
        throw err;
    }
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);


});
