import {MeRequest} from "../Request/index.js";
import UserController from "../Controllers/UserController.js";

export default async function user(fastify, options) {
    let userController = new UserController()

    fastify.get('/me', MeRequest, userController.me)
}