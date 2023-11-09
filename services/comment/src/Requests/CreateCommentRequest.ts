export default {
    type: "object",
    properties: {
        product_id: {type: "string"},
        user_id: {type: "string"},
        comment: {type: "string"},
    },
    required: ["product_id", "user_id", "comment"],
    additionalProperties: false,
}

export interface ICreateCommentRequest {
    product_id: string;
    user_id: string;
    comment: string;
}