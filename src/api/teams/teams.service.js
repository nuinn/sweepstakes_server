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

async function populateTeams({ teams, wildcard }) {
  if (wildcard) {
    const wildcardData = await teamsRepository.populateTeams({ wildcard });
    return wildcardData;
  }
  const teamsData = await teamsRepository.populateTeams({ teams });
  return teamsData;
}

export {
  getAll,
  add,
  edit,
  populateTeams,
};
