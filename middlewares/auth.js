function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log('req.headers');
  console.log(req.headers);
  next();
}

module.exports = authenticateToken;