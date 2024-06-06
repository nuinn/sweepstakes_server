import * as leaguesService from './leagues.service.js';

async function getByName(req, res) {
  const { name } = req.params;
  const league = await leaguesService.getByName({ name: name.toLowerCase() });
  res.json(league);
}

async function create(req, res) {
  const { body } = req;
  const addedLeague = await leaguesService.create({ newLeague: body });
  res.json(addedLeague);
}

export {
  getByName,
  create,
};
