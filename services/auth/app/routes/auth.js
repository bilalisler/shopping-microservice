import {LoginRequest, SignUpRequest} from '../Request/index.js'
import AuthController from "../Controllers/AuthController.js";

export default async function routes(fastify, options) {
    let authController = new AuthController()

    fastify.post('/login', LoginRequest, authController.logIn)

    fastify.post('/signup', SignUpRequest, authController.signUp)

    fastify.post('/refresh', options, authController.refresh)

    fastify.post('/verify', options, authController.verify)
}