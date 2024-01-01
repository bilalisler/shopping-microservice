export default async function routes(fastify, options) {
    fastify.get('/health/check', async (request, reply) => {
        return reply.send({OK: 'Success Auth'})
    })
}

