import Router from 'express';
import * as leaguesController from './leagues.controller.js';

const router = Router();

router.get('/:name', leaguesController.getByName);

export default router;
