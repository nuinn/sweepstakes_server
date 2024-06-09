import Router from 'express';
import * as teamsController from './teams.controller.js';

const router = Router();

router.get('/', teamsController.getAll);
router.post('/', teamsController.add);
router.patch('/:name', teamsController.edit);

export default router;
