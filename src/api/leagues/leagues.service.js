import * as leaguesRepository from './leagues.repository.js';

async function getByName({ name }) {
  const league = await leaguesRepository.getByName({ name });
  return league;
}

async function create({ newLeague }) {
  const addedLeague = await leaguesRepository.create({ newLeague });
  return addedLeague;
}

async function edit({ _id, body }) {
  const editedLeague = await leaguesRepository.edit({ _id, body });
  return editedLeague;
}

export {
  getByName,
  create,
  edit,
};
