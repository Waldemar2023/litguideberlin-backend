const mongoose = require("mongoose");

const { Schema } = mongoose;

const Entry = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  image: {
    type: String,
  },
  entryType: {
    type: String,
  },
  link: {
    type: String,
  },
  author: {
    // nice to have! Objectid
  },
  museum: {
    // nice to have! Objectid
  },
});

module.exports = mongoose.model("Entry", Entry);
