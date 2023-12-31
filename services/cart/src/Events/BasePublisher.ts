import amqp, {Channel, Connection} from 'amqplib'
import Locals from "../Modules/Locals";

class BasePublisher {
    connection: Connection;
    queue: string;

    constructor(queueName: string) {
        this.queue = queueName;
    }

    async createChannel() {
        this.connection = await amqp.connect('amqp://' + Locals.config().rabbitMQHost + ':' + Locals.config().rabbitMQPort);

        return await this.connection.createChannel()
    }

    async send(msg: string) {
        const ch: Channel = await this.createChannel()
        const bufferMsg: Buffer = Buffer.from(JSON.stringify(msg))

        ch.sendToQueue(this.queue, bufferMsg)

        await ch.close();
        await this.connection.close();
    }
}

export default BasePublisher
