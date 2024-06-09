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

async function edit(req, res) {
  const { name } = req.params;
  const { body } = req;
  const editedTeam = await teamsService.edit({ name, body });
  res.json(editedTeam);
}

export {
  getAll,
  add,
  edit,
};
