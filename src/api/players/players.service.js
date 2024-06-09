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

async function addTeam({ _id, team, wildcard }) {
  if (team) {
    const updatedPlayer = await playersRepository.addTeam({ _id, team });
    return updatedPlayer;
  }
  const updatedPlayer = await playersRepository.addWildcard({ _id, wildcard });
  return updatedPlayer;
}

async function remove({ _id }) {
  const removedPlayer = await playersRepository.remove({ _id });
  return removedPlayer;
}

export {
  getAll,
  getByLeague,
  add,
  addTeam,
  remove,
};
