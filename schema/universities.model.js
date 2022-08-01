const mongoose = require("mongoose");

const { Schema } = mongoose;

const UniversityModel = new Schema({
  name: String,
  description: String,
  logo: String,
  address: {
    city: String,
    state: String,
    region: String,
  },
});
const Universities = mongoose.model("univeristies", UniversityModel);
module.exports = Universities;
