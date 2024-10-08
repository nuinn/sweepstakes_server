import * as leaguesRepository from './leagues.repository.js';
import * as teamsService from '../teams/teams.service.js';

async function getByName({ name }) {
  let league = await leaguesRepository.getByName({ name });
  if (!league) {
    league = await leaguesRepository.create({ leagueName: name });
  }
  return league;
}

async function create({ leagueName }) {
  const addedLeague = await leaguesRepository.create({ leagueName });
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
      penalties: unregisteredMatch.score.penalties || false,
    });
  }
  const response = await teamsService.update({ parsedUnregisteredMatches });
  console.log('this is it now', response);
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
