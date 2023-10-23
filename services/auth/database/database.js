import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'
async function database (fastify, options) {
    fastify.register(fastifyMongo, {
        url: 'mongodb://localhost:27017/auth_db'
    })
}
export default fastifyPlugin(database)