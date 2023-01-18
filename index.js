const express = require("express");

if (process.env.ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

const app = express();

const PORT = process.env.PORT || 3003
app.get("/", (req, res) => {
  res.send(`Hello World ${process.env.PORT}`)
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})