import {createClient} from 'redis';
import {RedisClientType as _RedisClientType} from "@redis/client/dist/lib/client";

class Redis {
    client: _RedisClientType

    public init = async () => {
        this.client = createClient()

        this.client.on('error', err => console.error('Redis Client Error', err))
        this.client.on('connect', () => console.info('Redis connected'))
        this.client.on('ready', () => console.info('Redis ready!'))

        await this.client.connect()
    }

    public set = (key: string, val: any) => {
        return this.client.set(key, val)
    }

    public get = async (key: string) => {
        return await this.client.get(key)
        //.then((resp) => console.log('resp:', resp)).catch((err) => console.error('err:', err))
    }
}

export default new Redis