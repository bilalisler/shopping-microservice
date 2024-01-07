import {Request, Response} from "express";
import {ICartService} from "../Services/CartService";

class CartController {
    public cartService: ICartService;

    public constructor(cartService: ICartService) {
        this.cartService = cartService
    }

    public async showCart(req: Request, res: Response) {
        const userId: string = req.header('x-user-id') ?? ""

        res.json(
            await this.cartService.getCart(
                userId
            )
        )
    }

    public async addItem(req: Request, res: Response) {
        const userId: string = req.header('x-user-id') ?? ""
        await this.cartService.addItem(userId, req.body)

        res.json({"message": "success"})
    }


    public async updateItem(req: Request, res: Response) {
        const userId: string = req.header('x-user-id') ?? ""
        await this.cartService.updateItemQuantity(userId, req.body)

        res.json({"message": "success"})
    }

    public async deleteItem(req: Request, res: Response) {
        const userId: string = req.header('x-user-id') ?? ""
        await this.cartService.deleteItem(userId, req.body)

        res.json({"message": "success"})
    }

    public async clearCart(req: Request, res: Response) {
        const userId: string = req.header('x-user-id') ?? ""
        await this.cartService.clearCart(userId)

        res.json({"message": "success"})
    }
}

export default CartController