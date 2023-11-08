export default {
    type: "object",
    properties: {
        name: {type: "string"},
        description: {type: "string"},
        image_path: {type: "string"},
        is_active: {type: "boolean", default: true},
    },
    required: ["name"],
    additionalProperties: false,
}

export interface ICreateCategoryRequest {
    name: string;
    description: string;
    image_path: string;
    is_active: boolean;
}