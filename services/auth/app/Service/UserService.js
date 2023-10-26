import UserRepository from "../Repository/UserRepository.js";
import {generateHashPassword} from "../Utils/Bcrypt.js";

export default class UserService {
    constructor() {
        this.userRepository = new UserRepository()
    }

    async createUser(userData) {
        userData.password = await generateHashPassword(userData.password)

        return await this.userRepository.createUser(userData)
    }

    async updateUser(id, userData) {
        return await this.userRepository.updateUser(id, userData)
    }
}