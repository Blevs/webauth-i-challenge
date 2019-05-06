const express = require('express');

const server = express();
server.use(express.json());

const users = require('./users/routes.js');
server.use('/api/', users);

server.listen(3300, () => console.log("server on port 3300"));
