export const send = async (request, reply) => {
    reply.header('x-env', process.env.ENVIRONMENT)
}