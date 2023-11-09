import {Schema, model} from 'mongoose';

export interface IComment {
    product_id: string;
    user_id: string;
    comment?: string;
}

const commentSchema = new Schema<IComment>({
    product_id: {type: String, required: true},
    user_id: {type: String, required: true},
    comment: {type: String, required: false},
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
});

export default model<IComment>('Comment', commentSchema);
