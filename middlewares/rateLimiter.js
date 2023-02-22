const rateLimit = require('express-rate-limit');

const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins in milliseconds
  max: 50,
  message: 'You have exceeded the 50 requests in 15 minutes limit!',
  headers: true,
});

module.exports = {
  rateLimiterUsingThirdParty
};