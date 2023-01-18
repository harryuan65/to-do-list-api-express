import express, { Express, Request, Response } from "express";
import Database from "./models/database";
import router from "./router";

if (process.env.ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

const app: Express = express();

const PORT = process.env.PORT || 3003;
app.use(router);
app.get("/", (req: Request, res: Response) => {
  res.send("Healthy")
})

app.listen(PORT, () => {
  console.log(`[express] 🚀 Listening on ${PORT}`)
  console.log(`[database] 🚀 Setting up database`)
})