import BaseConsumer from "../BaseConsumer.js";

export default class CreatedUserConsumer extends BaseConsumer {
    queue = 'created.user'

    constructor() {
        super()
    }

    handler(msg, channel) {
        console.log('msg:', msg.content.toString())
        channel.ack(msg);
    }
}