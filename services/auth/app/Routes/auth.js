import {LoginRequest, SignUpRequest, RefreshRequest} from '../Request/index.js'
import AuthController from "../Controllers/AuthController.js";

export default async function routes(fastify, options) {
    let authController = new AuthController()

    fastify.post('/login', LoginRequest, async (request, reply) => authController.logIn(request, reply))

    fastify.post('/signup', SignUpRequest, async (request, reply) => authController.signUp(request, reply))

    fastify.post('/refresh', {...RefreshRequest, ...options}, authController.refresh)
}