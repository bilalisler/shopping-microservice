import AuthRepository from "../Repositry/AuthRepository.js";
import NotFoundException from "../Exceptions/NotFoundException.js";
import InvalidPasswordException from "../Exceptions/InvalidPasswordException.js";
import bcrypt from "bcryptjs";

export default class AuthService {
    constructor() {
        this.authRepository = new AuthRepository()
    }

    async checkCredentials(email, password) {
        let user = await this.authRepository.getUser(email)

        if (user === null) {
            throw new NotFoundException('User was not found')
        }

        const isMatch = await this.comparePassword(password, user.password)
        if (!isMatch) {
            throw new InvalidPasswordException('Password is invalid')
        }

        return user
    }

    async generateHashPassword(password) {
        const salt = await bcrypt.genSalt(10);

        return await bcrypt.hash(password, salt);
    }

    async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword)
    }
}