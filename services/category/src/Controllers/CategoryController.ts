import {Request, RequestHandler, Response} from "express";

class CategoryController {

    public constructor() {
    }

    public show(req: Request, res: Response) {
        res.json({requestBody2: req.body})
    }

    public create(req: Request, res: Response) {
        res.json({requestBody2: req.body})
    }

    public update(req: Request, res: Response) {
        res.json({requestBody2: req.body})
    }

    public delete(req: Request, res: Response) {
        res.json({requestBody2: req.body})
    }
}

export default new CategoryController