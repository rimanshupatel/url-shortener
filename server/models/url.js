const mongoose = require("mongoose");

const urlScheme = new mongoose.Schema(
  {
    shortId: {
      type: String,
      require: true,
    },
    originalUrls: {
      type: String,
      require: true,
    },
    visitHistory: [
      {
        timeStamp: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlScheme);

module.exports = URL;
