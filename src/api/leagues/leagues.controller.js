import * as leaguesService from './leagues.service.js';

async function getByName(req, res) {
  const { name } = req.params;
  const league = leaguesService.getByName({ name });
  res.json(league);
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getByName,
};
