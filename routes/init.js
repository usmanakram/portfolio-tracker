const { rateLimiterUsingThirdParty } = require('../middlewares/rateLimiter');

const auth = require('./auth');
const users = require('./users');

module.exports = function(app) {
  // Apply middleware
  app.use(rateLimiterUsingThirdParty);

  app.use('/auth', auth);
  app.use('/users', users);
}