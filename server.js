const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

let corsOption = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOption));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/", (req, res) => {
  res.write("<p>{statusCode: 200 }</p>");
  res.end();
});

const server = http.createServer(app);
server.listen(3000, (req, res) => {
  console.log("Your server is running on 3000");
});
