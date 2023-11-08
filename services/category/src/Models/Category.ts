import {Schema, model} from 'mongoose';

export interface ICategory {
    slug: string;
    name: string;
    description?: string;
    image_path?: string;
    is_active?: boolean;
    created_by?: string;
    updated_by?: string;
    created_at?: string;
    updated_at?: string;
}

const categorySchema = new Schema<ICategory>({
    slug: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: false},
    image_path: {type: String, required: false},
    is_active: {type: Boolean, required: false, default: true},
    created_by: {type: String, required: true},
    updated_by: {type: String, required: false}
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
});

export default model<ICategory>('Category', categorySchema);
