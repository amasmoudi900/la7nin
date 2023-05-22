// import mongoose module
const mongoose = require("mongoose");
// Schema
const commentSchema = mongoose.Schema({
  content: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Match",
  },
});
// Model Name (collection 'comments' will be created/generated)
const comment = mongoose.model("Comment", commentSchema);
// Make file exporatble
module.exports = comment;
