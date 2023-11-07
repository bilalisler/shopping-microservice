import CreatedCategoryConsumer from "../Events/Consumer/CreatedCategoryConsumer";

class Queue {
    public init = () => {
        // initialize queues
        new CreatedCategoryConsumer();
    };
}

export default new Queue