import express, {Application} from 'express';
import Locals from "./Locals";
import ExceptionHandler from './../Exception/Handler'
import JWT from "../Middleware/JWT";
import apiRouter from '../Routes/Api'

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
        this.express.use(JWT)
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