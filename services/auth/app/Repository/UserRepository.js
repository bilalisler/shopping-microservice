import User from "../Models/User.js";

export default class UserRepository {
    async getUser(email) {
        return await User.findOne({email})
    }

    async createUser(payload) {
        const user = new User(payload)
        return await user.save()
    }

    async updateUser(id, payload) {
        await User.updateOne({_id: id}, payload);
    }
}