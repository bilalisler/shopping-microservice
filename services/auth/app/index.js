import Fastify from 'fastify'
import {preValidation, onError, OnSend} from "./Hooks/index.js";
import {userRoute, authRoute, healthRoute,} from './Routes/index.js'
import {database} from './Modules/index.js'
import jwt from './Plugin/Jwt.js'
import {config} from 'dotenv'

const fastify = Fastify({
    logger: false
})

config();

fastify.addHook('onError', onError)
fastify.addHook('onSend', OnSend)

fastify.register(jwt)
fastify.register(healthRoute)
fastify.register(userRoute, {prefix: '/user', preValidation})
fastify.register(authRoute, {prefix: '/auth', preValidation})

fastify.ready().then(() => {
    database()
})

fastify.listen({host: process.env.APP_ADDRESS, port: process.env.APP_PORT}, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    console.log(`Server is now listening on ${address}`)
})