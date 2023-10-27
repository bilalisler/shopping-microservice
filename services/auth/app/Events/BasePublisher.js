import amqplib from 'amqplib'

export default class BasePublisher {
    constructor(queue) {
        this.queue = queue
    }

    async createChannel() {
        const conn = await amqplib.connect('amqp://localhost');

        return await conn.createChannel()
    }

    async send(msg) {
        const ch = await this.createChannel()

        ch.sendToQueue(this.queue, msg)
    }
}
