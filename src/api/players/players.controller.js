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

export {
  getAll,
  getByLeague,
};
