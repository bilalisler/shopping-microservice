import fastifyPlugin from 'fastify-plugin'
import fastifyJwt from "@fastify/jwt";

export const jwt = async (fastify, options) => {
    fastify.register(fastifyJwt, {
        secret: "supersecret"
    })
}

// fastify.register(fastifyJwt, {
//     secret: {
//         private: {
//             // key: readFileSync(`${path.join(__dirname, 'certs')}/private.pem`),
//             passphrase: 'supersecret'
//         },
//         // public: readFileSync(`${path.join(__dirname, 'certs')}/public.pem`)
//     },
//     sign: { algorithm: 'ES256' }
// })

export default fastifyPlugin(jwt)