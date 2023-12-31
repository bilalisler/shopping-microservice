export default {
    type: "object",
    properties: {
        product_id: {type: "string"},
        quantity: {type: "string"},
    },
    required: ["product_id", "quantity"],
    additionalProperties: false,
}

export interface IAddToCartRequest {
    product_id: string;
    quantity: string;
}