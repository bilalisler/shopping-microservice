import BasePublisher from "../BasePublisher";

export default class CreatedProfilePublisher extends BasePublisher {
    constructor() {
        super('created.user')

        this.send('send msg')
    }
}