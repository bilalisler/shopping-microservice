export default class AuthController {
    async logIn(request, reply) {
        const payload = request.body

        // @TODO: check user
        const token = await reply.jwtSign(payload, {expiresIn: 86400})

        return reply.send({token})
    }

    async signUp(request, reply) {
        console.log('im here')
    }

    async refresh(request, reply) {
        console.log('im here')
    }

    async verify(request, reply) {
        console.log('im here')
    }
}