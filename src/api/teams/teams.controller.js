import * as teamsService from './teams.service.js';

async function getAll(req, res) {
  const teams = await teamsService.getAll();
  res.json(teams);
}

async function add(req, res) {
  const newTeam = req.body;
  const addedTeam = await teamsService.add({ newTeam });
  res.json(addedTeam);
}

export {
  getAll,
  add,
};
