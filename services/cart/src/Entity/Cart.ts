import {Schema, Entity} from 'redis-om'
import Redis from "../Modules/Redis";
export class Cart extends Entity {}

export const cartSchema = new Schema(Cart, {
    expired: {type: 'boolean'},
    user_id: {type: 'string'},

    session_id: {type: 'string'},
    order_id: {type: 'string'},

    product_id: {type: 'string'},
    quantity: {type: 'number'},
    created_at: {type: 'date'},
    updated_at: {type: 'date'},
})

// export const cartRepository = Redis.client.fetchRepository(cartSchema)
