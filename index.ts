import express, { Express, Request, Response } from "express";

if (process.env.ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

const app: Express = express();

const PORT = process.env.PORT || 3003;
app.get("/", (req: Request, res: Response) => {
  res.send(`Hello World ${process.env.PORT}`)
})

app.listen(PORT, () => {
  console.log(`[express] 🚀 Listening on ${PORT}`)
})