import BaseConsumer from "../BaseConsumer.js";

export default class CreatedUserConsumer extends BaseConsumer {
    constructor() {
        super('created.user')
    }

    handler(msg, channel) {
        console.log('msg:', msg.content.toString())
        channel.ack(msg);
    }
}