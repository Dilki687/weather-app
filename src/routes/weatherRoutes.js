const express = require("express");
const router = express.Router();

// Sample route for weather
router.get("/", (req, res) => {
  res.send("Weather data endpoint");
});

module.exports = router;
