// import mongoose module
const mongoose = require("mongoose");
// Schema
const teamSchema = mongoose.Schema({
  name: String,
  owner: String,
  stadium: Number,
  foundation: Number,
});
// Model Name (collection 'teams' will be created/generated)
const team = mongoose.model("Team", teamSchema);
// Make file exporatble
module.exports = team;
