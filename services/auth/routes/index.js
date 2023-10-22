export async function firstRoute(fastify, options) {
    const collection = fastify.mongo.db.collection('sample_collection')

    fastify.get('/test',new UserController().findUser)

    fastify.get('/animals', async (request, reply) => {
        const result = await collection.find().toArray()
        if (result.length === 0) {
            throw new Error('No documents found')
        }
        return result
    })

    fastify.get('/animals/:animal', async (request, reply) => {
        const result = await collection.findOne({animal: request.params.animal})
        if (!result) {
            throw new Error('Invalid value')
        }
        return result
    })

    const schema = {
        body: {
            type: 'object',
            required: ['animal'],
            properties: {
                animal: {type: 'string'},
            },
        },
    }

    fastify.post('/animals', {schema}, async (request, reply) => {
        return await collection.insertOne({animal: request.body.animal})
    })
}