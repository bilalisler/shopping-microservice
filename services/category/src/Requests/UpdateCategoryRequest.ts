export default {
    type: "object",
    properties: {
        id: {type: "string"},
        name: {type: "string"},
        description: {type: "string"},
        image_path: {type: "string"},
        is_active: {type: "boolean"}
    },
    required: ["id", "name"],
    additionalProperties: false,
}

export interface IUpdateCategoryRequest {
    id: string;
    name: string;
    description: string;
    image_path: string;
    is_active: boolean;
}