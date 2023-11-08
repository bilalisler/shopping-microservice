import {Router} from 'express';
import validateBody from "../Middleware/RequestValidator";
import CategoryController from '../Controllers/CategoryController';
import CreateCategoryRequest from "../Requests/CreateCategoryRequest";
import UpdateCategoryRequest from "../Requests/UpdateCategoryRequest";
import DeleteCategoryRequest from "../Requests/DeleteCategoryRequest";
// import * as expressJwt from 'express-jwt';

const router = Router();


router.get('/', CategoryController.show);
router.post('/', validateBody(CreateCategoryRequest), CategoryController.create);
router.put('/', validateBody(UpdateCategoryRequest), CategoryController.update);
router.delete('/', validateBody(DeleteCategoryRequest), CategoryController.delete);

export default router;