import Fastify from 'fastify'
import {firstRoute} from './routes/index.js'
import dbConnector from './dbConnection.js'

const fastify = Fastify({
    logger: true
})

fastify.register(dbConnector)
fastify.register(firstRoute)

fastify.listen({port: 3000}, function (err, address) {
    if (err) {
        fastify.log.error('Error:',err)
        process.exit(1)
    }

    console.log(`Server is now listening on ${address}`)
})