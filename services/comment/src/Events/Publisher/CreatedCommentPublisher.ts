import BasePublisher from "../BasePublisher";

export default class CreatedCommentPublisher extends BasePublisher {
    constructor() {
        super('created.user')

        this.send('send msg')
    }
}