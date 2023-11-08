export default {
    type: "object",
    properties: {
        id: {type: "string"}
    },
    required: ["id"],
    additionalProperties: false,
}

export interface IDeleteCategoryRequest {
    id: string;
}