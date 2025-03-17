
Overview

This project is a weather tracking system that allows users to register, update their location, and fetch weather data based on their coordinates. It integrates with OpenWeatherMap API to retrieve weather details and uses Nodemailer for email notifications.

Features

User registration with name, email, and location (latitude & longitude)

Update user location

Fetch weather data for a user

Send scheduled weather reports via email every 3 hours

Google Cloud API integration for city name resolution

Deployed on Vercel

-----------------------------------------

01. Install Dependencies
02. Configure Environment Variables

Create a .env file in the root directory and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
WEATHER_API_KEY=your_openweathermap_api_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
GOOGLE_CLOUD_API_KEY=your_google_cloud_key

03. Start the Server
npm start

--------------------------------

API Endpoints

1.Register a User -  POST /api/users
2.Update User Location -  PUT /api/users/:id/location
3. Get User Weather Data - GET /api/users/:id/weather
4. Scheduled Weather Emails - Emails are sent every 3 hours with updated weather data using Nodemailer.