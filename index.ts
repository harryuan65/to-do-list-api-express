import express, { Express, Request, Response } from 'express';
import { Database } from './models/database';
import router from './router';
import bodyParser from 'body-parser';

if (process.env.ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

const app: Express = express();

const PORT = process.env.PORT || 3003;
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

app.use((req: Request, res: Response, next) => {
  console.log(`[${res.statusCode}] ${req.method.toUpperCase()} ${req.path}`);
  next();
});

app.use(router);

app.get('/', (req: Request, res: Response) => {
  res.send('Healthy');
});

app.listen(PORT, () => {
  console.log(`[express] 🚀 Listening on ${PORT}`);
  console.log(`[database] 🚀 Setting up database ${Database.driver.database}`);
});
