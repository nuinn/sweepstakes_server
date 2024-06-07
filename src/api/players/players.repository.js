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

export {
  getAll,
  getByLeague,
  add,
};
