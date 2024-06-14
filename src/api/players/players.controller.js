import * as playersService from './players.service.js';
import * as teamsService from '../teams/teams.service.js';

async function addTeams({ player }) {
  const returningData = player;
  if (player.wildcard) {
    const wildcardData = await teamsService.populateTeams({
      wildcard: player.wildcard,
    });
    returningData.wildcardData = wildcardData;
  }
  const teamsData = await teamsService.populateTeams({ teams: player.teams });
  returningData.teamsData = teamsData;
  return returningData;
}

async function getAll(req, res) {
  const players = await playersService.getAll();
  const playersWithTeamsPromises = players.map(async (player) => {
    const playerWithTeams = await addTeams({ player });
    return playerWithTeams;
  });
  const playersWithTeams = await Promise.all(playersWithTeamsPromises);
  await res.json(playersWithTeams);
}

async function getByLeague(req, res) {
  const { league } = req.params;
  const players = await playersService.getByLeague({ league });
  const playersWithTeamsPromises = players.map(async (player) => {
    const playerWithTeams = await addTeams({ player });
    return playerWithTeams;
  });
  const playersWithTeams = await Promise.all(playersWithTeamsPromises);
  await res.json(playersWithTeams);
}

async function add(req, res) {
  const { name, league } = req.body;
  const addedPlayer = await playersService.add({ name, league });
  res.json(addedPlayer);
}

async function addTeam(req, res) {
  const { _id } = req.params;
  const { team, wildcard } = req.body;
  const updatedPlayer = await playersService.addTeam({ _id, team, wildcard });
  const updatedPlayerWithTeams = await addTeams({ player: updatedPlayer });
  // if (updatedPlayer.wildcard) {
  //   const wildcardData = await teamsService.populateTeams({
  //     wildcard: updatedPlayer.wildcard,
  //   });
  //   updatedPlayer.wildcardData = wildcardData;
  // }
  // const teamsData = await teamsService.populateTeams({ teams: updatedPlayer.teams });
  // updatedPlayer.teamsData = teamsData;
  res.json(updatedPlayerWithTeams);
}

async function remove(req, res) {
  const { _id } = req.params;
  const removedPlayer = await playersService.remove({ _id });
  res.json(removedPlayer);
}

export {
  getAll,
  getByLeague,
  add,
  addTeam,
  remove,
};
