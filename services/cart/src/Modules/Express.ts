import express, {Application} from 'express';
import Locals from "./Locals";
import ExceptionHandler from './../Exception/Handler'
import apiRouter from '../Routes/Api'
import healthRouter from '../Routes/Health'

class Express {
    /**
     * Create the express object
     */
    public express: Application;

    /**
     * Initializes the express server
     */
    constructor() {
        this.express = express();

        this.mountMiddlewares();
        this.mountErrorHandler();
        this.mountRoutes();
    }

    /**
     * Registering API Routes
     */
    private mountRoutes = () => {
        this.express.use(apiRouter)
        this.express.use(healthRouter)
    };


    /**
     * Registering Exception / Error Handlers
     */
    private mountErrorHandler = () => {
        this.express.use(ExceptionHandler.errorHandler);
    };

    /**
     * Registering App Middlewares
     */
    private mountMiddlewares = () => {
        this.express.use(express.json())
    };

    /**
     * Starting Server
     */
    public init = () => {
        let port = Locals.config().appPort

        this.express.listen(port, () => {
            console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        }).on('error', (_error) => {
            console.log('Error: ', _error.message);
        });
    };
}

export default new Express