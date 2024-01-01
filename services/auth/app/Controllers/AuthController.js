import AuthService from "../Service/AuthService.js";
import UserService from "../Service/UserService.js";
import CreatedUserPublisher from "../Events/Publisher/CreatedUserPublisher.js";

export default class AuthController {
    constructor() {
        this.authService = new AuthService()
        this.userService = new UserService()
    }

    async logIn(request, reply) {
        const {email, password} = request.body

        let user = await this.authService.checkCredentials(email, password)

        const token = await reply.jwtSign({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            gender: user.gender
        }, {expiresIn: "10h"})

        return reply.send({token})
    }

    async signUp(request, reply) {
        const payload = request.body

        const user = await this.userService.createUser(payload)

        new CreatedUserPublisher(user)

        return reply.send({
            message: 'User was created successfully'
        })
    }

    async refresh(request, reply) {
        console.log('im here')
    }
}