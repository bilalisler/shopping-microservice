export default {
    type: "object",
    properties: {
        product_id: {type: "string"},
        quantity: {type: "integer"},
    },
    required: ["product_id", "quantity"],
    additionalProperties: false,
}

export interface IAddItemRequest {
    product_id: string;
    quantity: number;
}