const express = require('express');
const db = require('../data/dbConfig.js');
const protected = require('../auth/protected-middleware.js');

const router = express.Router();

router.get('/', protected, (req, res) => {
  db('users')
    .then(users => res.status(200).json(users))
    .catch(() => res.status(500).json({message: "Error fetching users"}))
});

module.exports = router;
