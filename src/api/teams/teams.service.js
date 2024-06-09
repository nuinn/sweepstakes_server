import * as teamsRepository from './teams.repository.js';

async function getAll() {
  const teams = await teamsRepository.getAll();
  return teams;
}

async function add({ newTeam }) {
  const addedTeam = await teamsRepository.add({ newTeam });
  return addedTeam;
}

async function edit({ name, body }) {
  const editedTeam = await teamsRepository.edit({ name, body });
  return editedTeam;
}

export {
  getAll,
  add,
  edit,
};
