import * as teamsRepository from './teams.repository.js';

async function getAll() {
  const teams = await teamsRepository.getAll();
  return teams;
}

async function add({ newTeam }) {
  const addedTeam = await teamsRepository.add({ newTeam });
  return addedTeam;
}

export {
  getAll,
  add,
};
