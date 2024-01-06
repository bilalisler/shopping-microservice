export default {
    type: "object",
    properties: {
        product_id: {type: "string"}
    },
    required: ["product_id"],
    additionalProperties: false,
}

export interface IDeleteItemRequest {
    product_id: string;
}