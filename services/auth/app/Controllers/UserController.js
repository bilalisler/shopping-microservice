export default class UserController {
    async me(request, reply) {
        reply.send(request.user?._doc)
    }
}