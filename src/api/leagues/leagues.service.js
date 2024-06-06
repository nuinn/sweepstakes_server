import * as leaguesRepository from './leagues.repository.js';
import * as playersService from '../players/players.service.js';

async function getByName({ name }) {
  const league = await leaguesRepository.getByName({ name });
  const players = await playersService.getByLeague({ league: league._id });
  league.players = players;
  return league;
}

async function create({ newLeague }) {
  const addedLeague = await leaguesRepository.create({ newLeague });
  return addedLeague;
}

export {
  getByName,
  create,
};
