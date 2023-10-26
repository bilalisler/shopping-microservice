import UserService from "../Service/UserService.js";

export default class UserController {
    constructor() {
        this.userService = new UserService()
    }

    async me(request, reply) {
        reply.send(request.user?._doc)
    }

    async update(request, reply) {
        const {email, fullName, gender} = request.body
        const id = request.user?._doc._id

        await this.userService.updateUser(id, {email, fullName, gender})

        return reply.send({
            message: 'User was updated successfully'
        })
    }
}