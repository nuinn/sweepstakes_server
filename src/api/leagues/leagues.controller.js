import * as leaguesService from './leagues.service.js';
import * as playersService from '../players/players.service.js';

async function getByName(req, res) {
  const { name } = req.params;
  const league = await leaguesService.getByName({ name: name.toLowerCase() });
  if (!league) {
    res.status(400).json({ msg: 'league does not exist' });
    return;
  }
  const players = await playersService.getByLeague({ league: league._id });
  league.players = players;
  res.json(league);
}

async function create(req, res) {
  const { body } = req;
  const addedLeague = await leaguesService.create({ newLeague: body });
  res.json(addedLeague);
}

export {
  getByName,
  create,
};
