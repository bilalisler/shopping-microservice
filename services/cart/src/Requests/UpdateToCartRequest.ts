export default {
    type: "object",
    properties: {
        id: {type: "string"},
        comment: {type: "string"},
    },
    required: ["id", "comment"],
    additionalProperties: false,
}

export interface IUpdateToCartRequest {
    id: string;
    comment: string;
}