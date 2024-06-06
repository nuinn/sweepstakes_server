import LeagueModel from './leagues.model.js';

async function getByName({ name }) {
  const league = LeagueModel.findOne({ 'name': name }).lean();
  return league;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getByName,
};
