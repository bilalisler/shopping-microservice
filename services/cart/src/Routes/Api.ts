import {Request, Response, Router} from 'express';
import validateBody from "../Middleware/RequestValidator";
import CommentController from '../Controllers/CartController';
import AddToCartRequest from "../Requests/AddToCartRequest";
import UpdateToCartRequest from "../Requests/UpdateToCartRequest";
import DeleteFromCartRequest from "../Requests/DeleteFromCartRequest";

const router = Router();


router.get('/health/check', async function (req: Request, res: Response) {
    res.json({
        "status": "Success Cart"
    })
})
router.get('/', CommentController.show);
router.post('/', validateBody(AddToCartRequest), CommentController.add);
router.put('/', validateBody(UpdateToCartRequest), CommentController.update);
router.delete('/', validateBody(DeleteFromCartRequest), CommentController.delete);

export default router;