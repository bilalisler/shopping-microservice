import express, {Application} from 'express';
import Locals from "./Locals";
import ExceptionHandler from './../Exception/Handler'
import apiRouter from '../Routes/Api'
import healthRouter from '../Routes/Health'

class Express {
    /**
     * Create the express object
     */
    public static express: Application;

    /**
     * Registering API Routes
     */
    private static mountRoutes = () => {
        Express.express.use(apiRouter())
        Express.express.use(healthRouter())
    };


    /**
     * Registering Exception / Error Handlers
     */
    private static mountErrorHandler = () => {
        Express.express.use(ExceptionHandler.errorHandler);
    };

    /**
     * Registering App Middlewares
     */
    private static mountMiddlewares = () => {
        Express.express.use(express.json())
    };

    /**
     * Starting Server
     */
    public static init() {
        Express.express = express();

        Express.mountMiddlewares();
        Express.mountErrorHandler();
        Express.mountRoutes();

        let port = Locals.config().appPort

        this.express.listen(port, () => {
            console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        }).on('error', (_error) => {
            console.log('Error: ', _error.message);
        });
    };
}

export default Express