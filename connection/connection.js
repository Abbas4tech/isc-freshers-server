const mongoose = require("mongoose");

const db = mongoose.connect(
  "mongodb://localhost:27017/isc-freshers-task",
  (err) => {
    if (err) console.log("Unable to connect to Databse", err);
    else console.log("Database connected");
  }
);

module.exports = db;
