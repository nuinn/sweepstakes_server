import * as playersService from './players.service.js';

async function getAll(req, res) {
  const players = await playersService.getAll();
  res.json(players);
}

async function getByLeague(req, res) {
  const { league } = req.params;
  const players = await playersService.getByLeague({ league });
  res.json(players);
}

async function add(req, res) {
  const { name, league } = req.body;
  const addedPlayer = await playersService.add({ name, league });
  res.json(addedPlayer);
}

export {
  getAll,
  getByLeague,
  add,
};
