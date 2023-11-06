import CreatedProfileConsumer from "../Events/Consumer/CreatedProfileConsumer";

class Queue {
    public init = () => {
        // initialize queues
        new CreatedProfileConsumer();
    };
}

export default new Queue