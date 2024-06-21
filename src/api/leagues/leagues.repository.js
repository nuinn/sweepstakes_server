import LeagueModel from './leagues.model.js';

async function getByName({ name }) {
  const league = await LeagueModel.findOne({ name }).lean();
  return league;
}

async function create({ newLeague }) {
  const addedLeague = await LeagueModel.create(newLeague);
  return addedLeague;
}

async function edit({ _id, body }) {
  const editedLeague = await LeagueModel.findByIdAndUpdate(_id, body, {
    new: true,
  }).lean();
  return editedLeague;
}

async function update({ _id, unregisteredMatches }) {
  const bulkUpdate = unregisteredMatches.map((unregisteredMatch) => ({
    updateOne: {
      filter: { _id },
      update: {
        $push: {
          matches: unregisteredMatch.id,
        },
      },
    },
  }));
  const updatedLeague = await LeagueModel.bulkWrite(bulkUpdate);
  return updatedLeague;
}

export {
  getByName,
  create,
  edit,
  update,
};
