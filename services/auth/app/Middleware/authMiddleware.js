export const middleware = async (request, reply) => {
    try {
        let user = await request.jwtVerify()

        request.body = {...request.body, user}
    } catch (err) {
        reply.send(err)
    }
}