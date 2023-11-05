import {Router} from 'express';
// import * as expressJwt from 'express-jwt';

import ProfileController from '../Controllers/ProfileController';

const router = Router();

router.get('/', ProfileController.show);
router.post('/', ProfileController.create);
router.put('/', ProfileController.update);
router.delete('/', ProfileController.delete);

export default router;