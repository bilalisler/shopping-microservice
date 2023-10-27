import amqplib from 'amqplib'

export default class BasePublisher {
    queue; // override
    connection;

    async createChannel() {
        this.connection = await amqplib.connect('amqp://localhost');

        return await this.connection.createChannel()
    }

    async send(msg) {
        const ch = await this.createChannel()

        ch.sendToQueue(this.queue, msg)

        await ch.close();
        await this.connection.close();
    }
}
