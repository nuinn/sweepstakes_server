import * as leaguesRepository from './leagues.repository.js';

async function getByName({ name }) {
  const league = leaguesRepository.getByName({ name });
  return league;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getByName,
};
