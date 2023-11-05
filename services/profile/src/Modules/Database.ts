import mongoose from 'mongoose'

class Database {
    public init = () => {
        const dsn = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`

        mongoose.connect(dsn)
            .then(() => {
                console.info('connected to mongo server at: ' + dsn);
            }).catch((error) => {
            console.info('Failed to connect to the Mongo server!!');
            console.log(error);
            throw error;
        })
    };
}

export default new Database