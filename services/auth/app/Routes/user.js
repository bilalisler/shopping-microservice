import UserController from "../Controllers/UserController.js";
import {UpdateUserRequest} from "../Request/index.js";

export default async function user(fastify, options) {
    let userController = new UserController()

    fastify.get('/', options, userController.me)

    fastify.put('/', {...UpdateUserRequest, ...options}, async (request, reply) => userController.update(request, reply))
}