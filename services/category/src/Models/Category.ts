import {Schema, model} from 'mongoose';

interface ICategory {
    country: string;
    city?: string;
}

const categorySchema = new Schema<ICategory>({
    country: {type: String, required: true},
    city: {type: String, required: true}
});

export default model<ICategory>('Category', categorySchema);
