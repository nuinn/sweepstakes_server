import Router from 'express';
import * as teamsController from './teams.controller.js';

const router = Router();

router.get('/', teamsController.getAll);
router.post('/', teamsController.add);

export default router;
