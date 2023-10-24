import mongoose from 'mongoose'

async function database() {
    mongoose.connect('mongodb://localhost:27017/auth_db')
}

export default database