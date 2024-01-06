import {Router} from 'express';
import HealthController from "../Controllers/HealthController";

const router = Router();

router.get('/health/check', HealthController.check)
export default router;