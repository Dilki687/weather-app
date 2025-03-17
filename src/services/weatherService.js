const axios = require("axios");
require("dotenv").config();
const { Client } = require("@googlemaps/google-maps-services-js");

async function fetchWeather(lat, lon) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
}

async function getCityFromCoordinates(lat, lng) {
  const client = new Client({});
  try {
    const response = await client.reverseGeocode({
      params: {
        latlng: [lat, lng],
        key: process.env.GOOGLE_API_KEY,
      },
    });

    return (
      response.data.results[0].address_components.find((component) =>
        component.types.includes("locality")
      )?.long_name || "Unknown City"
    );
  } catch (error) {
    console.error("Error fetching city:", error);
    return "Unknown City";
  }
}

module.exports = { fetchWeather, getCityFromCoordinates };
