import "reflect-metadata";
import express from "express";

console.log("Hello, World!");

const app = express();

app.all("*", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT, () => {
  console.log("API listening on port " + process.env.PORT);
});
