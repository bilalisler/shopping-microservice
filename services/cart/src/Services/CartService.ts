import {IAddItemRequest} from "../Requests/AddItemRequest";
import {IUpdateItemRequest} from "../Requests/UpdateItemRequest";
import {IDeleteItemRequest} from "../Requests/DeleteItemRequest";
import Client from "redis-om/dist/client";
import {cartSchema} from "../Entity/Cart";

export interface ICartService {
    redisClient: Client;
    repository: any;

    getCart: (userId: string) => any;
    clearCart: (userId: string) => any;

    getItem: (userId: string, productId: string) => any;
    addItem: (userId: any, item: IAddItemRequest) => any;
    updateItemQuantity: (userId: any, item: IUpdateItemRequest) => any;
    deleteItem: (userId: string, data: IDeleteItemRequest) => any;
}

class CartService implements ICartService {
    redisClient: Client;
    repository: any;

    public constructor(client: Client) {
        this.redisClient = client
        this.repository = client.fetchRepository(cartSchema)
        this.repository.createIndex()
    }

    public async getCart(userId: string): Promise<any> {
        return await this.repository
            .search()
            .where("user_id")
            .equals(userId)
            .return
            .all()
    }

    public async getItem(userId: string, productId: string): Promise<any> {
        return await this.repository
            .search()
            .where('user_id')
            .equals(userId)
            .where('product_id')
            .equals(productId)
            .return
            .first()
    }

    public async addItem(userId: string, item: IAddItemRequest): Promise<string> {
        let cartItem = await this.getItem(userId, item.product_id)

        if (!cartItem) {
            cartItem = await this.repository.createEntity()
            cartItem.user_id = userId
            cartItem.expired = false
            cartItem.created_at = new Date()
        }
        cartItem.product_id = item.product_id
        cartItem.quantity = item.quantity

        return await this.repository.save(cartItem) // return entity id
    }

    public async updateItemQuantity(userId: string, item: IUpdateItemRequest): Promise<string> {
        let cartItem = await this.getItem(userId, item.product_id)

        if (!cartItem) {
            cartItem = await this.repository.createEntity()
            cartItem.user_id = userId
            cartItem.expired = false
            cartItem.product_id = item.product_id
            cartItem.created_at = new Date()
        }
        cartItem.updated_at = new Date()
        cartItem.quantity = item.quantity

        return await this.repository.save({...cartItem, ...item}) // return entity id
    }

    public async deleteItem(userId: string, request: IDeleteItemRequest): Promise<void> {
        let item = await this.getItem(userId, request.product_id)

        return await this.repository.remove(item.entityId)
    }

    public async clearCart(userId: string): Promise<void> {
        await this.repository
            .search()
            .where('user_id')
            .equals(userId)
            .return
            .remove()
    }
}

export default CartService