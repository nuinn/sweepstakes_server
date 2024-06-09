import PlayerModel from './players.model.js';

async function getAll() {
  const players = await PlayerModel.find({}).lean();
  return players;
}

async function getByLeague({ league }) {
  const players = await PlayerModel.find({ league }).lean();
  return players;
}

async function add({ name, league }) {
  const addedPlayer = await PlayerModel.create({ name, league });
  return addedPlayer;
}

async function addTeam({ _id, team }) {
  const updatedPlayer = await PlayerModel.findByIdAndUpdate(
    _id,
    { $push: { teams: team } },
    { new: true },
  ).lean();
  return updatedPlayer;
}

async function addWildcard({ _id, wildcard }) {
  const updatedPlayer = await PlayerModel.findByIdAndUpdate(
    _id,
    { wildcard },
    { new: true },
  ).lean();
  return updatedPlayer;
}

async function remove({ _id }) {
  const removedPlayer = await PlayerModel.findByIdAndDelete(_id);
  return removedPlayer;
}

export {
  getAll,
  getByLeague,
  add,
  addTeam,
  addWildcard,
  remove,
};
