export const middleware = async (request, reply) => {
    try {
        await request.jwtVerify()
    } catch (err) {
        reply.send(err)
    }
}