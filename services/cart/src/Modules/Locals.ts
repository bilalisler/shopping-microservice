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
        const redisHost = process.env.REDIS_HOST || 'localhost';
        const redisPort = process.env.REDIS_PORT || 27017;
        const redisUIPort = process.env.REDIS_UI_PORT || 8081;
        const redisDBName = process.env.REDIS_DBNAME || 'comment_id';

        return {
            environment,
            appHost,
            appPort,
            rabbitMQHost,
            rabbitMQPort,
            rabbitMQUIPort,
            redisHost,
            redisPort,
            redisUIPort,
            redisDBName
        }
    }
}

export default new Locals