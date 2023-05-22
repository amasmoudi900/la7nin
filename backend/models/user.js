// import mongoose module
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
// Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  pwd: String,
  role: String,
  tel: Number,
  img: String,
});
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

// Model Name (collection 'users' will be created/generated)
const user = mongoose.model("User", userSchema);
// Make file exporatble
module.exports = user;
