import {IAddItemRequest} from "../Requests/AddItemRequest";
import {IUpdateItemRequest} from "../Requests/UpdateItemRequest";
import {IDeleteItemRequest} from "../Requests/DeleteItemRequest";
import Redis from "../Modules/Redis";
import {cartSchema} from "../Entity/Cart";

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
        const cartRepository = Redis.client.fetchRepository(cartSchema)
        await cartRepository.createIndex()

        return await cartRepository
            .search()
            .where("user_id")
            .equals(userId)
            .return
            .all()
    }

    public async getItem(userId: string, productId: string): Promise<any> {
        const cartRepository = Redis.client.fetchRepository(cartSchema)

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
        const cartRepository = Redis.client.fetchRepository(cartSchema)

        let cart = await this.getItem(userId, item.product_id)

        if (!cart) {
            cart = await cartRepository.createEntity()
            cart.user_id = userId
            cart.expired = false
            cart.created_at = new Date()
        }
        cart.product_id = item.product_id
        cart.quantity = item.quantity

        return await cartRepository.save(cart) // return entity id
    }

    public async updateItemQuantity(userId: string, item: IUpdateItemRequest): Promise<string> {
        const cartRepository = Redis.client.fetchRepository(cartSchema)

        let cart = await this.getItem(userId, item.product_id)

        if (!cart) {
            cart = await cartRepository.createEntity()
            cart.user_id = userId
            cart.expired = false
            cart.product_id = item.product_id
            cart.created_at = new Date()
        }
        cart.updated_at = new Date()
        cart.quantity = item.quantity

        return await cartRepository.save({...cart, ...item}) // return entity id
    }

    public async deleteItem(userId: string, request: IDeleteItemRequest): Promise<void> {
        const cartRepository = Redis.client.fetchRepository(cartSchema)

        let item = await this.getItem(userId, request.product_id)

        return await cartRepository.remove(item.entityId)
    }

    public async clearCart(userId: string): Promise<void> {
        const cartRepository = Redis.client.fetchRepository(cartSchema)

        await cartRepository
            .search()
            .where('user_id')
            .equals(userId)
            .return
            .remove()

        // const items = this.getCart(userId);
        //
        // for (const [_, item] of Object.entries(items)) {
        //     const cartRepository = Redis.client.fetchRepository(cartSchema)
        //     await cartRepository.remove(item.entityId)
        // }
    }
}

export default new CartService