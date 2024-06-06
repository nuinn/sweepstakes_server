import Router from 'express';
import leaguesRouter from './leagues/leagues.router.js';
import playersRouter from './players/players.router.js';
import teamsRouter from './teams/teams.router.js';

const router = Router();

router.use('/leagues', leaguesRouter);
router.use('/players', playersRouter);
router.use('/teams', teamsRouter);

export default router;
