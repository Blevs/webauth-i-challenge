const express = require('express');
const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/register', (req, res) => {
  const credentials = req.body;
  if (credentials.username && credentials.password) {
    credentials.password = bcrypt.hashSync(credentials.password);
    db('users')
      .insert(credentials)
      .then(([id]) => res.status(204).end())
      .catch(err => console.log(err) || res.status(500).json({message: "Error registering user"}));
  } else {
    res.status(400).json({message: "Username and password required"});
  }
});

router.get('/users', (req, res) => {
  db('users')
    .then(users => res.status(200).json(users))
    .catch(() => res.status(500).json({message: "Error fetching users"}));
});


module.exports = router;
