import * as leaguesService from './leagues.service.js';
import * as playersService from '../players/players.service.js';

async function getByName(req, res) {
  const { name } = req.params;
  const league = await leaguesService.getByName({ name: name.toLowerCase() });
  if (!league) {
    res.status(400).json({ msg: `${name} league does not exist` });
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

async function edit(req, res) {
  const { _id } = req.params;
  const { body } = req;
  const editedLeague = await leaguesService.edit({ _id, body });
  const players = await playersService.getByLeague({ league: _id });
  editedLeague.players = players;
  res.json(editedLeague);
}

async function update(req, res) {
  const { _id } = req.params;
  const { body } = req;
  console.log('_id', _id, 'body', body);
}

export {
  getByName,
  create,
  edit,
  update,
};
