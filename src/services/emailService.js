const nodemailer = require('nodemailer');
const { fetchWeather } = require('./weatherService');
const User = require('../models/userModel');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendWeatherEmails() {
    try {
        const users = await User.find();
        for (const user of users) {
            const weatherData = await fetchWeather(user.latitude, user.longitude);
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: user.email,
                subject: `Weather Update for ${user.city}`,
                text: `Hello ${user.name},\nCurrent Weather: ${weatherData.weather[0].description}, Temperature: ${weatherData.main.temp}°C.`
            };
            await transporter.sendMail(mailOptions);
        }
        console.log('Weather emails sent!');
    } catch (error) {
        console.error('Error sending emails:', error);
    }
}

module.exports = sendWeatherEmails;