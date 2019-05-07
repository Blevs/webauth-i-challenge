const express = require('express');
const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.session);
  if (req.session && req.session.userID) {
    db('users')
      .where({id: req.session.userID})
      .then(user => user
            ? db('users')
            .then(users => res.status(200).json(users))
            .catch(() => res.status(500).json({message: "Error fetching users"}))
            : (void 0).throwError())
      .catch(() => res.status(401).json({message: "You shall not pass!"}));
  } else {
    res.status(401).json({message: "You shall not pass!"});
  }
});

module.exports = router;
