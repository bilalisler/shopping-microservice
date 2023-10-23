import Fastify from 'fastify'
import {userRoute, authRoute} from './app/routes/index.js'
import database from './database/database.js'
import jwt from './jwt.js'
import {middleware as preValidation} from "./app/Middleware/authMiddleware.js";

const fastify = Fastify({
    logger: false
})

fastify.register(database)
fastify.register(jwt)

fastify.register(userRoute, {prefix: '/user', preValidation})
fastify.register(authRoute, {prefix: '/auth', preValidation})
fastify.listen({port: 3000}, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    console.log(`Server is now listening on ${address}`)
})