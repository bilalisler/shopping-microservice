import amqp, {Message, Connection, Channel} from 'amqplib'
import Locals from "../Modules/Locals";

abstract class BaseConsumer {
    queue: string;

    constructor(queueName: string) {
        this.queue = queueName;
        this.consume(this.handler)
    }

    async createChannel() {
        const conn: Connection = await amqp.connect('amqp://' + Locals.config().rabbitMQHost + ':' + Locals.config().rabbitMQPort);
        const ch: Channel = await conn.createChannel()
        await ch.assertQueue(this.queue)
        return ch
    }

    async consume(callback: any) {
        const ch = await this.createChannel()
        ch.consume(this.queue, (msg) => callback(msg, ch))
    }

    abstract handler(msg: Message, ch: Channel): any // override this method in extended class
}

export default BaseConsumer