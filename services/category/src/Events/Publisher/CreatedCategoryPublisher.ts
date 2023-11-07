import BasePublisher from "../BasePublisher";

export default class CreatedCategoryPublisher extends BasePublisher {
    constructor() {
        super('created.user')

        this.send('send msg')
    }
}