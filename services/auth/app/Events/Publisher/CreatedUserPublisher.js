import BasePublisher from "../BasePublisher.js";

export default class CreatedUserPublisher extends BasePublisher {
    constructor(msg) {
        super('created.user')

        this.send(
            Buffer.from(JSON.stringify(msg))
        )
    }
}