// videoModel.js
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  publishedAt: Date,
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
