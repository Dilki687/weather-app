//Weather.js
const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  weatherData: {
    temperature: Number,
    humidity: Number,
    description: String,
  },
});

module.exports = mongoose.model("Weather", WeatherSchema);
