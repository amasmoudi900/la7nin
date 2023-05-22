// import mongoose module
const mongoose = require("mongoose");
// Schema
const playerSchema = mongoose.Schema({
  name: String,
  position: String,
  nbr: Number,
  age: Number,
});
// Model Name (collection 'players' will be created/generated)
const player = mongoose.model("Player", playerSchema);
// Make file exporatble
module.exports = player;
