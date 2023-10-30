// const express = require("express");
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import route from "./routes/route.js";

// creating app
const app = express();
const PORT = 8000;

// imported middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//cusrom middlewares
app.use("/", route);
Connection();

app.listen(PORT, () => {
  console.log(`this server is running at port ${PORT} `);
});
