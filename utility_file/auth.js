const hapi = require('hapi');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
require('dotenv').config();
const server = hapi.server({
    port : 4000,
    host : 'localhost'
});
const token = jwt.sign(uuid.v4(),process.env.ACC_TOKEN_SECRET);
console.log(token)
server.start();
console.log("server looking at ",server.info.uri)