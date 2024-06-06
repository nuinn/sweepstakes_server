import Router from 'express';
// import request from 'request';
// import externalRouter from './external/external.router.js';
import teamsRouter from './teams/teams.router.js';

const router = Router();

// router.use('/api', externalRouter);
router.use('/teams', teamsRouter);

export default router;
