const User = require('../models/userModel');
const { fetchWeather, getCityFromCoordinates } = require('./weatherService');

// Store user details
async function storeUser(req, res) {
    try {
        const { name, email, latitude, longitude } = req.body;
        if (!name || !email || !latitude || !longitude) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const user = new User({ name, email, latitude, longitude });
        await user.save();
        res.status(201).json({ message: 'User saved successfully', user });
    } catch (error) {
        console.error('Error storing user:', error);
        res.status(500).json({ error: 'Server error' });
    }
}

// Update user location
async function updateUserLocation(req, res) {
    try {
        const { latitude, longitude } = req.body;
        const city = await getCityFromCoordinates(latitude, longitude);

        const user = await User.findByIdAndUpdate(req.params.id, { latitude, longitude, city }, { new: true });

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ message: 'Location updated', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Retrieve weather data
async function getUserWeather(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const weather = await fetchWeather(user.latitude, user.longitude);
        res.json({ city: user.city, weather });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { storeUser, updateUserLocation, getUserWeather };
