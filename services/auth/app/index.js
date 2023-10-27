import app from './app.js'
import {database} from './Modules/index.js'
import CreatedUserConsumer from "./Events/Consumer/CreatedUserConsumer.js";

app.ready().then(() => {
    database()

    new CreatedUserConsumer()
})

app.listen({host: process.env.APP_HOST, port: process.env.APP_PORT}, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Server is now listening on ${address}`)
})