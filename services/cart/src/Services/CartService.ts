import Cart, {ICart, CartModel} from "../Models/Cart";
import {IAddToCartRequest} from "../Requests/AddToCartRequest";
import {IUpdateToCartRequest} from "../Requests/UpdateToCartRequest";
import {IDeleteFromCartRequest} from "../Requests/DeleteFromCartRequest";
import {type} from "os";

export interface ICartService {
    all: () => any;
    add: (data: IAddToCartRequest) => any;
    update: (data: IUpdateToCartRequest) => any;
    delete: (data: IDeleteFromCartRequest) => any;
}

class CartService implements ICartService {
    public async all(): Promise<ICart[]> {
        return await Cart.find()
    }

    public async get(id: string): Promise<ICart | null> {
        return await Cart.findById(id)
    }

    public async add(data: IAddToCartRequest): Promise<void> {
        await new Cart({
            user_id: 1,
            expired: false,
            order_id: '1231231',
            products: [
                {
                    product_id: 'ıo12u3oısdj9fıj',
                    quantity: 3
                }
            ]
        }).save()
    }

    public async update(data: IUpdateToCartRequest): Promise<void> {
        const {id, ...updateData} = data;
        const filter: object = {_id: id}
        const options: object = {returnDocument: "after"}

        Cart.findOneAndUpdate(
            filter,
            {
                ...updateData,
                ...{
                    updated_by: "user-123123"
                }
            }
            , options
        );
    }

    public async delete(data: IDeleteFromCartRequest): Promise<{}> {
        return await Cart.findByIdAndDelete({_id: data.id})
    }
}

export default new CartService