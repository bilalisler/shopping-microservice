import {Router} from 'express';
import HealthController from "../Controllers/HealthController";

export default () => {
    const router = Router();
    router.get('/health/check', HealthController.check)
    return router
};