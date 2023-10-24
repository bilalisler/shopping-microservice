import User from "../Models/User.js";

export default class AuthRepository {
    async getUser(email) {
        return await User.findOne({email})
    }

    async createUser(payload) {
        const user = new User(payload)
        return await user.save()
    }
}