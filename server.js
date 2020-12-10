const hapi = require('hapi');
require('dotenv').config();
const router = require('./routes/routes.js')

const server = hapi.server({
    port: process.env.PORT || 5000
});
server.route(router.check)
server.route(router.status)
server.route(router.register)
server.route(router.login)
server.route(router.getUserById)
server.route(router.createNewUser)
server.route(router.updateUserItem)
server.route(router.deletelistbyid)


server.start()
console.log("server looking at " + server.info.uri);