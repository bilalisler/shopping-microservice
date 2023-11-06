import {Request, NextFunction, Response} from "express";

class Handler {
    public errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send('Something broke!')
    }
}

export default new Handler