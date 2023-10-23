import Fastify from 'fastify'
import {userRoute,authRoute} from './app/routes/index.js'
import database from './database/database.js'

const fastify = Fastify({
    logger: true
})

fastify.register(database)
fastify.register(userRoute)
fastify.register(authRoute)

fastify.listen({port: 3000}, function (err, address) {
    if (err) {
        fastify.log.error('Error:',err)
        process.exit(1)
    }

    console.log(`Server is now listening on ${address}`)
})