import {Schema, model} from 'mongoose';

export interface IProductCategory {
    product_id: string;
    category_id: string;
}

const productCategorySchema = new Schema<IProductCategory>({
    product_id: {type: String, required: true},
    category_id: {type: String, required: true}
});

export default model<IProductCategory>('ProductsCategories', productCategorySchema);
