import AuthRepository from "../Repository/AuthRepository.js";
import NotFoundException from "../Exceptions/NotFoundException.js";
import InvalidPasswordException from "../Exceptions/InvalidPasswordException.js";
import {comparePassword} from "../Utils/Bcrypt.js";

export default class AuthService {
    constructor() {
        this.authRepository = new AuthRepository()
    }

    async checkCredentials(email, password) {
        let user = await this.authRepository.getUser(email)

        if (user === null) {
            throw new NotFoundException('User was not found')
        }

        const isMatch = await comparePassword(password, user.password)
        if (!isMatch) {
            throw new InvalidPasswordException('Password is invalid')
        }

        return user
    }
}