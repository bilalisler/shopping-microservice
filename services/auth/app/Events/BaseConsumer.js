import amqplib from 'amqplib'

export default class BaseConsumer {
    queue; // override
    constructor() {
        this.consume(this.handler)
    }

    async createChannel() {
        const conn = await amqplib.connect('amqp://localhost');
        const ch = await conn.createChannel()
        await ch.assertQueue(this.queue)
        return ch
    }

    async consume(callback) {
        const ch = await this.createChannel()
        ch.consume(this.queue, (msg) => callback(msg, ch))
    }

    handler() {} // override this method in extended class
}
