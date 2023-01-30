import express, { Express, Request, Response } from 'express';
import { Database } from './models/database';
import router from './router';
import bodyParser from 'body-parser';

if (process.env.ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

const app: Express = express();

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

app.use(router);

app.get('/', (req: Request, res: Response) => {
  res.send('Healthy');
});

export default app;
