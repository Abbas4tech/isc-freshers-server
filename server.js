const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const connection = require("./connection/connection");
const UniversityModel = require("./schema/universities.model");
const Universities = require("./schema/universities.model");

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

app.get("/", async (req, res) => {
  const resp = await Universities.find(
    {},
    {
      name: 1,
      logo: 1,
      "address.city": 1,
      "address.state": 1,
      "address.region": 1,
      description: 1,
    }
  );
  console.log(resp);
  res.send(resp);
});

const server = http.createServer(app);
server.listen(3000, (req, res) => {
  console.log("Your server is running on 3000");
});
