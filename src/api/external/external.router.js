import Router from 'express';
import externalControllerGet from './external.controller.js';

const router = Router();

router.get('/', externalControllerGet);

export default router;
