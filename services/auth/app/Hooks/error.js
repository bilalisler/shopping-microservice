export const error = async (request, reply, error) => {
    const {message} = error

    reply.status(error.statusCode).send({message})
}