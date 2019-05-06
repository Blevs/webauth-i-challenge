const express = require('express');
const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/users', (req, res) => {
  db('users')
    .then(users => res.status(200).json(users))
    .catch(() => res.status(500).json({message: "Error fetching users"}));
});

module.exports = router;
