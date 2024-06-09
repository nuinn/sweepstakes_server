import * as playersService from './players.service.js';
import * as teamsService from '../teams/teams.service.js';

async function getAll(req, res) {
  const players = await playersService.getAll();
  res.json(players);
}

async function getByLeague(req, res) {
  const { league } = req.params;
  const players = await playersService.getByLeague({ league });
  res.json(players);
}

async function add(req, res) {
  const { name, league } = req.body;
  const addedPlayer = await playersService.add({ name, league });
  res.json(addedPlayer);
}

async function addTeam(req, res) {
  const { _id } = req.params;
  const { team, wildcard } = req.body;
  const updatedPlayer = await playersService.addTeam({ _id, team, wildcard });
  const teams = await teamsService
  res.json(updatedPlayer);
}

async function remove(req, res) {
  const { _id } = req.params;
  const removedPlayer = await playersService.remove({ _id });
  res.json(removedPlayer);
}

export {
  getAll,
  getByLeague,
  add,
  addTeam,
  remove,
};
