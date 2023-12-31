import {Request, Response} from "express";
import CommentService from "../Services/CartService";

class CartController {
    public async show(req: Request, res: Response) {
        await CommentService.all()
        res.json()
    }

    public async add(req: Request, res: Response) {

        let cart = await CommentService.get("6591623d9f36f52a29f9beb1")

        console.log('data:', cart);

        // await CommentService.add(
        //     req.body
        // )
        res.json({"message": "success"})
    }

    public async update(req: Request, res: Response) {
        await CommentService.update(
            req.body
        )
        res.json({"message": "success"})
    }

    public async delete(req: Request, res: Response) {
        await CommentService.delete(
            req.body
        )
        res.json({"message": "success"})
    }
}

export default new CartController