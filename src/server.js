const app = require('./app');
const cron = require('node-cron');
const sendWeatherEmails = require('./services/emailService');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Schedule Emails Every 3 Hours
cron.schedule('0 */3 * * *', sendWeatherEmails);