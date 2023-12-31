import {Model, Schema, model} from 'mongoose';

export interface ICart {
    user_id: string;
    expired: boolean;
    order_id?: string;
    products: [{
        product_id: string,
        quantity?: string;
    }]
}

interface ICartMethods {
    addToCart(): string;
}

export type CartModel = Model<ICart, {}, ICartMethods>;


const schema = new Schema<ICart, CartModel, ICartMethods>({
    user_id: {
        type: String,
        required: true
    },
    expired: {
        type: Boolean,
        default: false,
    },
    order_id: { // if cart converts to order, set order id
        type: String,
    },
    products: [
        {
            product_id: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },

        },
    ]
}, {
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
});

export default model<ICart, CartModel>('Cart', schema);
