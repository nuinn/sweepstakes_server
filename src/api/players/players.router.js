import Router from 'express';
import * as playersController from './players.controller.js';

const router = Router();

router.get('/', playersController.getAll);
router.get('/:league', playersController.getByLeague);
router.post('/', playersController.add);

export default router;
