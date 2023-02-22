const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('api /auth');
  res.send('OK');
});

module.exports = router;