import * as playersRepository from './players.repository.js';

async function getAll() {
  const players = await playersRepository.getAll();
  return players;
}

async function getByLeague({ league }) {
  const players = await playersRepository.getByLeague({ league });
  return players;
}

export {
  getAll,
  getByLeague,
};
