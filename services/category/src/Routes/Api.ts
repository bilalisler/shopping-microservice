import {Router} from 'express';
// import * as expressJwt from 'express-jwt';

import CategoryController from '../Controllers/CategoryController';

const router = Router();

router.get('/', CategoryController.show);
router.post('/', CategoryController.create);
router.put('/', CategoryController.update);
router.delete('/', CategoryController.delete);

export default router;