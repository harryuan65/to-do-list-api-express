import express, { Express, Request, Response } from 'express';
import { Database } from './models/database';
import router from './router';
import bodyParser from 'body-parser';

if (process.env.ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

class Server {
  app: Express;
  constructor(public port: number | string) {
    this.app = express();
    // application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // application/json
    this.app.use(bodyParser.json());

    this.app.use((req: Request, res: Response, next) => {
      console.log(
        `[${res.statusCode}] ${req.method.toUpperCase()} ${req.path}`
      );
      next();
    });

    this.app.use((req: Request, res: Response, next) => {
      res.setHeader('access-control-allow-origin', '*');
      res.setHeader(
        'access-control-allow-methods',
        'POST, GET, PUT, PATCH, DELETE, OPTIONS'
      );
      res.setHeader('access-control-allow-headers', 'Content-Type');
      next();
    });
    this.app.use(router);

    this.app.get('/', (req: Request, res: Response) => {
      res.send('Healthy');
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`[express] 🚀 Listening on ${this.port}`);
      console.log(
        `[database] 🚀 Setting up database ${Database.driver.database}`
      );
    });
  }
}

export { Server };
