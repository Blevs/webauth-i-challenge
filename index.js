const express = require('express');
const session = require('express-session');

const server = express();
server.use(express.json());

// configure express-session middleware
server.use(
  session({
    name: 'webauthi', // default is connect.sid
    secret: 'thisshouldnotbehere',
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      // secure: true, // only set cookies over https. Server will not send back a cookie over http.
    }, // 1 day in milliseconds
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    resave: false,
    saveUninitialized: false,
  })
);

const users = require('./users/routes.js');
server.use('/api/', users);

server.listen(3300, () => console.log("server on port 3300"));
