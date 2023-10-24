import Fastify from 'fastify'
import {userRoute, authRoute} from './app/Routes/index.js'
import database from './database/database.js'
import jwtModule from './app/Plugin/jwt.js'
import {preValidation, onError} from "./app/Hooks/index.js";

const fastify = Fastify({
    logger: false
})

fastify.addHook('onError', onError)
fastify.register(jwtModule)
fastify.register(userRoute, {prefix: '/user', preValidation})
fastify.register(authRoute, {prefix: '/auth', preValidation})

fastify.ready().then(() => {
    database()
})

fastify.listen({port: 3000}, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    console.log(`Server is now listening on ${address}`)
})