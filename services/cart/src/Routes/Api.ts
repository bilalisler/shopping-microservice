import {Request, Response, Router} from 'express';
import validateBody from "../Middleware/RequestValidator";
import CartController from '../Controllers/CartController';
import AddItemRequest from "../Requests/AddItemRequest";
import UpdateItemRequest from "../Requests/UpdateItemRequest";
import DeleteItemRequest from "../Requests/DeleteItemRequest";
import userChecker from "../Middleware/UserChecker";
import CartService, {ICartService} from "../Services/CartService";
import Redis from "../Modules/Redis";

export default () => {
    const router = Router();

    let cartService: ICartService = new CartService(Redis.client)
    let controller = new CartController(cartService)

    router.get(
        '/',
        userChecker,
        (req: Request, res: Response) => controller.showCart(req, res)
    )
    router.post(
        '/',
        userChecker,
        validateBody(AddItemRequest),
        (req: Request, res: Response) => controller.addItem(req, res)
    )
    router.put(
        '/',
        userChecker,
        validateBody(UpdateItemRequest),
        (req: Request, res: Response) => controller.updateItem(req, res)
    )
    router.delete(
        '/',
        userChecker,
        validateBody(DeleteItemRequest),
        (req: Request, res: Response) => controller.deleteItem(req, res)
    )
    router.delete(
        '/clear',
        userChecker,
        (req: Request, res: Response) => controller.clearCart(req, res)
    )

    return router
};