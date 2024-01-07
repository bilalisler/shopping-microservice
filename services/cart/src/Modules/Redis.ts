import {Client} from "redis-om";
import Locals from "./Locals";

export class IRedis {
    init: () => void;
    static client: any
}

/**
 * Cluster Doc: https://redis.io/docs/connect/clients/nodejs/#connect
 * Redis OM: https://redis.io/docs/connect/clients/om-clients/stack-node/
 */
export default class Redis extends IRedis {
    static client: any

    public static async init() {
        const client = new Client()
        await client.open(`redis://${Locals.config().redisHost}:${Locals.config().redisPort}`)
        this.client = client
    }
}