const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
  url_thumbnail_image: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Video", videosSchema);
