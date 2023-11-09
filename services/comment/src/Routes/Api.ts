import {Router} from 'express';
import validateBody from "../Middleware/RequestValidator";
import CommentController from '../Controllers/CommentController';
import CreateCommentRequest from "../Requests/CreateCommentRequest";
import UpdateCommentRequest from "../Requests/UpdateCommentRequest";
import DeleteCommentRequest from "../Requests/DeleteCommentRequest";
// import * as expressJwt from 'express-jwt';

const router = Router();


router.get('/', CommentController.show);
router.post('/', validateBody(CreateCommentRequest), CommentController.create);
router.put('/', validateBody(UpdateCommentRequest), CommentController.update);
router.delete('/', validateBody(DeleteCommentRequest), CommentController.delete);

export default router;