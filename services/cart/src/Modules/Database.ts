import mongoose from 'mongoose'
import Locals from "./Locals";

class Database {
    public init = () => {
        const dsn = `mongodb://${Locals.config().mongoHost}:${Locals.config().mongoPort}/${Locals.config().mongoDBName}`

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