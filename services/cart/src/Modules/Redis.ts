import {Client} from "redis-om";

/**
 * Cluster Doc: https://redis.io/docs/connect/clients/nodejs/#connect
 * Redis OM: https://redis.io/docs/connect/clients/om-clients/stack-node/
 */
export default class Redis {
    static client: any

    public static async init() {
        const client = new Client()
        await client.open('redis://localhost:6379')
        this.client = client
    }
}