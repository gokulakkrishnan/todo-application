const hapi = require('@hapi/hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const router = require('./routes/routes.js')
const Pack = require('./package');


const server =  hapi.server({
    port: process.env.PORT || 5000
});
const swaggerOptions = {
    info: {
            title: 'Test API Documentation',
            version: Pack.version,
        },
    };
const init = async()=>{
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
   await server.start()
    console.log("server looking at " + server.info.uri); 
}    
init();
server.route(router.check)
server.route(router.status)
server.route(router.register)
server.route(router.login)
server.route(router.getUserById)
server.route(router.createNewUser)
server.route(router.updateUserItem)
server.route(router.deletelistbyid)


