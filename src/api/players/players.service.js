import * as playersRepository from './players.repository.js';

async function getAll() {
  const players = await playersRepository.getAll();
  return players;
}

async function getByLeague({ league }) {
  const players = await playersRepository.getByLeague({ league });
  return players;
}

async function add({ name, league }) {
  const addedPlayer = await playersRepository.add({ name, league });
  return addedPlayer;
}

export {
  getAll,
  getByLeague,
  add,
};
