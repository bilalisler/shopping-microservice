import {Client} from "redis-om";
import {cartSchema} from "../Entity/Cart";
import Locals from "./Locals";

/**
 * Cluster Doc: https://redis.io/docs/connect/clients/nodejs/#connect
 * Redis OM: https://redis.io/docs/connect/clients/om-clients/stack-node/
 */
export default class Redis {
    static client: any

    public static async init() {
        const client = new Client()
        await client.open(`redis://${Locals.config().redisHost}:${Locals.config().redisPort}`)
        this.client = client
        await Redis.createIndex()
    }

    public static repository() {
        return Redis.client.fetchRepository(cartSchema)
    }

    public static async createIndex() {
        await Redis.repository().createIndex()
    }
}