import mongoose from 'mongoose'

async function database() {
    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`)
        .catch((err) => {
            console.error(err.toString())
            process.exit(0)
        })
}

export default database