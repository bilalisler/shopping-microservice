import {Router} from 'express';
import validateBody from "../Middleware/RequestValidator";
import CommentController from '../Controllers/CartController';
import AddItemRequest from "../Requests/AddItemRequest";
import UpdateItemRequest from "../Requests/UpdateItemRequest";
import DeleteItemRequest from "../Requests/DeleteItemRequest";
import userChecker from "../Middleware/UserChecker";

const router = Router();

router.get('/', userChecker, CommentController.showCart);
router.post('/', userChecker, validateBody(AddItemRequest), CommentController.addItem);
router.put('/', userChecker, validateBody(UpdateItemRequest), CommentController.updateItem);
router.delete('/', userChecker, validateBody(DeleteItemRequest), CommentController.deleteItem);
router.delete('/clear', userChecker, CommentController.clearCart);

export default router;