import AuthRepository from "../Repositry/AuthRepository.js";
import {generateHashPassword} from "../Utils/Bcrypt.js";


export default class UserService {
    async createUser(userData) {
        const authRepository = new AuthRepository()

        userData.password = await generateHashPassword(userData.password)

        return await authRepository.createUser(userData)
    }
}