import AuthService from "../Service/AuthService.js";
import UserService from "../Service/UserService.js";

export default class AuthController {
    constructor() {
        this.authService = new AuthService()
        this.userService = new UserService()
    }

    async logIn(request, reply) {
        const {email, password} = request.body

        let user = await this.authService.checkCredentials(email, password)

        const token = await reply.jwtSign(user, {expiresIn: "1m"})

        return reply.send({token})
    }

    async signUp(request, reply) {
        const payload = request.body

        await this.userService.createUser(payload)

        return reply.send({
            message: 'User was created successfully'
        })
    }

    async refresh(request, reply) {
        console.log('im here')
    }
}