import {ErrorRequestHandler, NextFunction, Response} from "express";

class Handler {
    public errorHandler = (err: any, req: Request, res: Response, next: NextFunction): any => {
        res.status(500).send('Something broke!')
    }
}

export default new Handler