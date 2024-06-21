import Router from 'express';
import * as leaguesController from './leagues.controller.js';

const router = Router();

router.get('/:name', leaguesController.getByName);
router.post('/', leaguesController.create);
router.patch('/:_id', leaguesController.edit);
router.patch('/update/:_id', leaguesController.update);

export default router;
