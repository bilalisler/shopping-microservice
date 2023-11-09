import CreatedCommentConsumer from "../Events/Consumer/CreatedCommentConsumer";

class Queue {
    public init = () => {
        // initialize queues
        new CreatedCommentConsumer();
    };
}

export default new Queue