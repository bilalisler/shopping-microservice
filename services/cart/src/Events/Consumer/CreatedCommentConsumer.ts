import BaseConsumer from "../BaseConsumer";
import {Channel, Message} from "amqplib";

export default class CreatedCommentConsumer extends BaseConsumer {
    constructor() {
        super('created.user')
    }

    public handler(msg: Message, ch: Channel) {
        console.log('msg:', msg.content.toString())
        ch.ack(msg);
    }
}