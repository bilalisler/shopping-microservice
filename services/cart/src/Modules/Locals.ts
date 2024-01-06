import dotenv from "dotenv";
import * as path from "path";

class Locals {
    public config(): any {
        dotenv.config({path: path.join(__dirname, '../../.env')});

        const environment = process.env.ENVIRONMENT || 'development';
        const appHost = process.env.APP_HOST || 'localhost';
        const appPort = process.env.APP_PORT || 3003;
        const rabbitMQHost = process.env.RABBITMQ_HOST || 'localhost';
        const rabbitMQPort = process.env.RABBITMQ_PORT || 5672;
        const rabbitMQUIPort = process.env.RABBITMQ_UI_PORT || 15672;
        const mongoHost = process.env.MONGO_HOST || 'localhost';
        const mongoPort = process.env.MONGO_PORT || 27017;
        const mongoUIPort = process.env.MONGO_UI_PORT || 8081;
        const mongoDBName = process.env.MONGO_DBNAME || 'comment_id';

        return {
            environment,
            appHost,
            appPort,
            rabbitMQHost,
            rabbitMQPort,
            rabbitMQUIPort,
            mongoHost,
            mongoPort,
            mongoUIPort,
            mongoDBName
        }
    }
}

export default new Locals