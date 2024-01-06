import {Request, Response} from "express";
import CartService from "../Services/CartService";

class CartController {
    public async showCart(req: Request, res: Response) {
        const userId: string = req.header('x-user-id') ?? ""

        res.json(
            await CartService.getCart(
                userId
            )
        )
    }

    public async addItem(req: Request, res: Response) {
        const userId: string = req.get('x-user-id') ?? ""
        await CartService.addItem(userId, req.body)

        res.json({"message": "success"})
    }


    public async updateItem(req: Request, res: Response) {
        const userId: string = req.get('x-user-id') ?? ""
        await CartService.updateItemQuantity(userId, req.body)

        res.json({"message": "success"})
    }

    public async deleteItem(req: Request, res: Response) {
        const userId: string = req.get('x-user-id') ?? ""
        await CartService.deleteItem(userId, req.body)

        res.json({"message": "success"})
    }

    public async clearCart(req: Request, res: Response) {
        const userId: string = req.get('x-user-id') ?? ""
        await CartService.clearCart(userId)

        res.json({"message": "success"})
    }
}

export default new CartController