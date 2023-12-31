export default {
    type: "object",
    properties: {
        id: {type: "string"}
    },
    required: ["id"],
    additionalProperties: false,
}

export interface IDeleteFromCartRequest {
    id: string;
}