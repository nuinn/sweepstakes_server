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

function isLive({ unregisteredResult }) {
  const { stage, result, PK } = unregisteredResult;
  if (stage === 'KO' && result !== 'won' && !PK) {
    return false;
  }
  return true;
}

async function update({ unregisteredResults }) {
  const updateResultsBulk = [];
  for (let i = 0; i < unregisteredResults.length; i++) {
    const unregisteredResult = unregisteredResults[i];
    const result = `${unregisteredResult.stage}.${unregisteredResult.result}`;
    const GF = `${unregisteredResult.stage}.GF`;
    const GA = `${unregisteredResult.stage}.GA`;
    updateResultsBulk.push({
      updateOne: {
        filter: { apiId: unregisteredResult.id },
        update: {
          $set: { live: isLive({ unregisteredResult }) },
          $inc: {
            played: 1,
            [result]: 1,
            [GF]: unregisteredResult.GF,
            [GA]: unregisteredResult.GA,
            'KO.PK': unregisteredResult.PK,
          },
        },
      },
    });
  }
  const updatedTeams = await TeamModel.bulkWrite(updateResultsBulk);
  return updatedTeams;
}

export {
  getAll,
  add,
  edit,
  populateTeams,
  update,
};
