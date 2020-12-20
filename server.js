const hapi = require('@hapi/hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const router = require('./routes/routes.js')
const Pack = require('./package');


const server =  hapi.server({
    port: process.env.PORT || 5000,
    routes: { 
        cors:{
            origin: ['*'], // an array of origins or 'ignore'
            headers: ['Authorization'], // an array of strings - 'Access-Control-Allow-Headers'
            exposedHeaders: ['Accept'], // an array of exposed headers - 'Access-Control-Expose-Headers',
            additionalExposedHeaders: ['Content-type'], // an array of additional exposed headers
            maxAge: 60,
            credentials: true // boolean - 'Access-Control-Allow-Credentials'
        }
     } 
});

const swaggerOptions = {
    info: {
            title: 'Test API Documentation',
            version: Pack.version,
        },
    };
    const checkOrigin = (origin) => {
        if(origin === 'http://localhost:3000'){
            return true
        }else{
            return false
        }
    }
const init = async()=>{
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
    await server.register({
        plugin: require('hapi-cors'),
        options: {
            checkOrigin: checkOrigin
        }
    })
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


