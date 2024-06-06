import TeamModel from './teams.model.js';

async function getAll() {
  const teams = await TeamModel.find({});
  return teams;
}

async function add({ newTeam }) {
  const addedTeam = await TeamModel.create(newTeam);
  return addedTeam;
}

export {
  getAll,
  add,
};
