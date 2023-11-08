import {Request, Response} from "express";
import CategoryService from "../Services/CategoryService";

class CategoryController {
    public async show(req: Request, res: Response) {
        res.json(await CategoryService.all())
    }

    public async create(req: Request, res: Response) {
        const data = req.body
        res.json(await CategoryService.create(data))
    }

    public async update(req: Request, res: Response) {
        const data = req.body
        res.json(await CategoryService.update(data))
    }

    public async delete(req: Request, res: Response) {
        const data = req.body
        res.json(await CategoryService.delete(data))
    }
}

export default new CategoryController