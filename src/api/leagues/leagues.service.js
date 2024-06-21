import * as leaguesRepository from './leagues.repository.js';
import * as teamsService from '../teams/teams.service.js';

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

async function update({ _id, unregisteredMatches }) {
  const parsedUnregisteredMatches = [];
  for (let i = 0; i < unregisteredMatches.length; i++) {
    const unregisteredMatch = unregisteredMatches[i];
    parsedUnregisteredMatches.push({
      id: unregisteredMatch.id,
      stage: unregisteredMatch.stage,
      home: unregisteredMatch.homeTeam.id,
      away: unregisteredMatch.awayTeam.id,
      winner: unregisteredMatch.score.winner,
      score: unregisteredMatch.score.fullTime,
    });
  }
  const response = teamsService.update({ parsedUnregisteredMatches });
  if (response) {
    const updatedLeague = leaguesRepository.update({
      _id, unregisteredMatches: parsedUnregisteredMatches,
    });
    return updatedLeague;
  }
  return 'error';
}

export {
  getByName,
  create,
  edit,
  update,
};
