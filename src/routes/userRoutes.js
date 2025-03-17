const express = require('express');
const { storeUser, updateUserLocation, getUserWeather } = require('../services/userService'); // Ensure correct path
const router = express.Router();

router.post('/', storeUser);
router.put('/:id/location', updateUserLocation);
router.get('/:id/weather', getUserWeather);

module.exports = router;