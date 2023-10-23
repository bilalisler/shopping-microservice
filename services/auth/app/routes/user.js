import UserController from "../Controllers/UserController.js";

export default async function user(fastify, options) {
    let userController = new UserController()

    fastify.get('/me', options, userController.me)
}