import {IAddItemRequest} from "../Requests/AddItemRequest";
import {IUpdateItemRequest} from "../Requests/UpdateItemRequest";
import {IDeleteItemRequest} from "../Requests/DeleteItemRequest";
import Redis from "../Modules/Redis";

export interface ICartService {
    getCart: (userId: string) => any;
    clearCart: (userId: string) => any;

    getItem: (userId: string, productId: string) => any;
    addItem: (userId: any, item: IAddItemRequest) => any;
    updateItemQuantity: (userId: any, item: IUpdateItemRequest) => any;
    deleteItem: (userId: string, data: IDeleteItemRequest) => any;
}

class CartService implements ICartService {
    public async getCart(userId: string): Promise<any> {
        const cartRepository = Redis.repository()
        await cartRepository.createIndex()

        return await cartRepository
            .search()
            .where("user_id")
            .equals(userId)
            .return
            .all()
    }

    public async getItem(userId: string, productId: string): Promise<any> {
        const cartRepository = Redis.repository()

        return await cartRepository
            .search()
            .where('user_id')
            .equals(userId)
            .where('product_id')
            .equals(productId)
            .return
            .first()
    }

    public async addItem(userId: string, item: IAddItemRequest): Promise<string> {
        const cartRepository = Redis.repository()

        let cartItem = await this.getItem(userId, item.product_id)

        if (!cartItem) {
            cartItem = await cartRepository.createEntity()
            cartItem.user_id = userId
            cartItem.expired = false
            cartItem.created_at = new Date()
        }
        cartItem.product_id = item.product_id
        cartItem.quantity = item.quantity

        return await cartRepository.save(cartItem) // return entity id
    }

    public async updateItemQuantity(userId: string, item: IUpdateItemRequest): Promise<string> {
        const cartRepository = Redis.repository()

        let cartItem = await this.getItem(userId, item.product_id)

        if (!cartItem) {
            cartItem = await cartRepository.createEntity()
            cartItem.user_id = userId
            cartItem.expired = false
            cartItem.product_id = item.product_id
            cartItem.created_at = new Date()
        }
        cartItem.updated_at = new Date()
        cartItem.quantity = item.quantity

        return await cartRepository.save({...cartItem, ...item}) // return entity id
    }

    public async deleteItem(userId: string, request: IDeleteItemRequest): Promise<void> {
        const cartRepository = Redis.repository()

        let item = await this.getItem(userId, request.product_id)

        return await cartRepository.remove(item.entityId)
    }

    public async clearCart(userId: string): Promise<void> {
        const cartRepository = Redis.repository()

        await cartRepository
            .search()
            .where('user_id')
            .equals(userId)
            .return
            .remove()
    }
}

export default new CartService