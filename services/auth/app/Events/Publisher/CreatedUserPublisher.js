import BasePublisher from "../BasePublisher.js";

export default class CreatedUserPublisher extends BasePublisher {
    queue = "created.user"
    constructor(msg) {
        super();
        this.send(
            Buffer.from(JSON.stringify(msg))
        )
    }
}