import Router from 'express';
import * as playersController from './players.controller.js';

const router = Router();

router.get('/', playersController.getAll);
router.get('/:league', playersController.getByLeague);
router.post('/', playersController.add);
router.patch('/add-team/:_id', playersController.addTeam);
router.delete('/:_id', playersController.remove);

export default router;
