const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const { User } = require('../models/user');

router.get('/', auth, async (req, res) => {
  console.log('api /users');

  const users = await User.find().lean();
  console.log('users');
  console.log(users);

  res.send(users);
});

router.post('/', async (req, res) => {
  res.send('OK');
});

module.exports = router;