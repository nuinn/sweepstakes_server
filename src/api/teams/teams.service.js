import * as teamsRepository from './teams.repository.js';

async function getAll() {
  const teams = await teamsRepository.getAll();
  return teams;
}

async function add({ newTeam }) {
  const addedTeam = await teamsRepository.add({ newTeam });
  return addedTeam;
}

async function edit({ name, body }) {
  const editedTeam = await teamsRepository.edit({ name, body });
  return editedTeam;
}

async function populateTeams({ teams, wildcard }) {
  if (wildcard) {
    const wildcardData = await teamsRepository.populateTeams({ wildcard });
    return wildcardData;
  }
  const teamsData = await teamsRepository.populateTeams({ teams });
  return teamsData;
}

async function update({ parsedUnregisteredMatches }) {
  function interpretResult({ result, isHome }) {
    if (result === 'DRAW') {
      return 'drawn';
    }
    if (result === 'HOME_TEAM') {
      if (isHome) {
        return 'won';
      }
      return 'lost';
    }
    if (isHome) {
      return 'lost';
    }
    return 'won';
  }
  const unregisteredResults = [];
  for (let i = 0; i < parsedUnregisteredMatches.length; i++) {
    const result = parsedUnregisteredMatches[i];
    unregisteredResults.push({
      id: result.home,
      result: interpretResult({ result: result.winner, isHome: true }),
      stage: result.stage === 'GROUP_STAGE' ? 'group' : 'KO',
      GF: result.score.home,
      GA: result.score.away,
    });
    unregisteredResults.push({
      id: result.away,
      result: interpretResult({ result: result.winner, isHome: false }),
      stage: result.stage === 'GROUP_STAGE' ? 'group' : 'KO',
      GF: result.score.away,
      GA: result.score.home,
    });
  }
  const updatedTeams = teamsRepository.update({ unregisteredResults });
  return updatedTeams;
}

export {
  getAll,
  add,
  edit,
  populateTeams,
  update,
};
