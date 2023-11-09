import {Request, Response} from "express";
import CommentService from "../Services/CommentService";

class CommentController {
    public async show(req: Request, res: Response) {
        res.json(await CommentService.all())
    }

    public async create(req: Request, res: Response) {
        const data = req.body
        res.json(await CommentService.create(data))
    }

    public async update(req: Request, res: Response) {
        const data = req.body
        res.json(await CommentService.update(data))
    }

    public async delete(req: Request, res: Response) {
        const data = req.body
        res.json(await CommentService.delete(data))
    }
}

export default new CommentController