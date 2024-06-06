import PlayerModel from './players.model.js';

async function getAll() {
  const players = await PlayerModel.find({}).lean();
  return players;
}

async function getByLeague({ league }) {
  const players = await PlayerModel.find({ league }).lean();
  return players;
}

export {
  getAll,
  getByLeague,
};
