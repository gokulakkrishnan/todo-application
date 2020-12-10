const hapi = require('hapi');
const router = require('./routes/routes.js')

const server = hapi.server({
    port: 5000,
    host: server.address().port
});
server.route(router.register)
server.route(router.login)
server.route(router.getUserById)
server.route(router.createNewUser)
server.route(router.updateUserItem)
server.route(router.deletelistbyid)


server.start()
console.log("server looking at " + server.info.uri);