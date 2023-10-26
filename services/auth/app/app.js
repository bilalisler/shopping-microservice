import Fastify from 'fastify'
import {preValidation, onError, OnSend} from "./Hooks/index.js";
import {userRoute, authRoute, healthRoute,} from './Routes/index.js'
import jwt from './Plugin/Jwt.js'
import {config} from 'dotenv'

config();

const fastify = Fastify({
    logger: false
})

fastify.addHook('onError', onError)
fastify.addHook('onSend', OnSend)

fastify.register(jwt)
fastify.register(healthRoute)
fastify.register(userRoute, {prefix: '/user', preValidation})
fastify.register(authRoute, {prefix: '/auth', preValidation})

export default fastify
