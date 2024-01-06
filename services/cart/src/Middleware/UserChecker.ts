import {NextFunction, Request, Response} from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers['x-user-id']) return res.status(401).json({"message": "Unauthorized"})
    next();
}