// import mongoose module
const mongoose = require("mongoose");
// Schema
const reclamationSchema = mongoose.Schema({
  subject: String,
  description: String,
  userId: String,
});
// Model Name (collection 'reclamations' will be created/generated)
const reclamation = mongoose.model("Reclamation", reclamationSchema);
// Make file exporatble
module.exports = reclamation;
