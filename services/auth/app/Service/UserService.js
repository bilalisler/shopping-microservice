import AuthRepository from "../Repositry/AuthRepository.js";
import bcrypt from "bcryptjs";
import AuthService from "./AuthService.js";


export default class UserService {
    async createUser(userData) {
        const authRepository = new AuthRepository()

        const authService = new AuthService()

        userData.password = await authService.generateHashPassword(userData.password)

        return await authRepository.createUser(userData)
    }
}