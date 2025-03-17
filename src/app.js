const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
connectDB();

// Routes
app.use('/api/users', userRoutes);

module.exports = app;