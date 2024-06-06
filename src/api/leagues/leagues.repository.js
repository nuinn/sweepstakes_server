import LeagueModel from './leagues.model.js';

async function getByName({ name }) {
  const league = await LeagueModel.findOne({ name }).lean();
  return league;
}

async function create({ newLeague }) {
  const addedLeague = await LeagueModel.create(newLeague);
  return addedLeague;
}

export {
  getByName,
  create,
};
