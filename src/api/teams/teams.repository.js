import TeamModel from './teams.model.js';

async function getAll() {
  const teams = await TeamModel.find({}).sort({ ranking: -1 });
  return teams;
}

async function add({ newTeam }) {
  const addedTeam = await TeamModel.create(newTeam);
  return addedTeam;
}

async function edit({ name, body }) {
  const editedTeam = await TeamModel.findOneAndUpdate(
    { name },
    { body },
    { new: true },
  ).lean();
  return editedTeam;
}

async function populateTeams({ teams, wildcard }) {
  if (wildcard) {
    const wildcardData = await TeamModel.find({ apiId: wildcard }).lean();
    return wildcardData;
  }
  const teamsData = await TeamModel.find({ apiId: { $in: teams } }).lean();
  return teamsData;
}

export {
  getAll,
  add,
  edit,
  populateTeams,
};
