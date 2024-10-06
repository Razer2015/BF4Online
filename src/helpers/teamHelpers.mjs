import {
  gameModeToEnum,
  gameServerMapModes,
  getSquadLocale,
  gameModeCategories,
} from './warsawHelpers.mjs'

import { get, multisort, toint, contains } from './surface.mjs'

// {
//     "lastUpdated": 1727106,
//     "snapshot": {
//       "status": "SUCCESS",
//       "gameId": 18014398529527500,
//       "gameMode": "RushLarge",
//       "mapVariant": 0,
//       "currentMap": "XP2/Levels/XP2_003/XP2_003",
//       "maxPlayers": 64,
//       "waitingPlayers": 0,
//       "roundTime": 0,
//       "defaultRoundTimeMultiplier": 300,
//       "teamInfo": {
//         "0": {
//           "faction": 0,
//           "players": {
//             "981982221": {
//               "name": "STARKILLER_gidf",
//               "tag": "",
//               "rank": 111,
//               "score": 0,
//               "kills": 0,
//               "deaths": 0,
//               "squad": 0,
//               "role": 1
//             }
//           }
//         },
//         "1": {
//           "faction": 0,
//           "players": {
//             "881499789": {
//               "name": "Airtightsky7",
//               "tag": "GAMR",
//               "rank": 117,
//               "score": 0,
//               "kills": 0,
//               "deaths": 0,
//               "squad": 1,
//               "role": 1
//             }
//           }
//         },
//         "2": {
//           "faction": 2,
//           "players": {
//             "1006685827644": {
//               "name": "ASADZDVZV",
//               "tag": "",
//               "rank": 18,
//               "score": 0,
//               "kills": 0,
//               "deaths": 0,
//               "squad": 1,
//               "role": 1
//             }
//           }
//         }
//       }
//     }
//   }

const unsupportedGameModes = [gameModeToEnum('ELIMINATION')]

const DEFAULT_TIMELIMIT = {}
DEFAULT_TIMELIMIT[gameServerMapModes.CONQUEST] = 1800
DEFAULT_TIMELIMIT[gameServerMapModes.RUSH] = 480
DEFAULT_TIMELIMIT[gameServerMapModes.SQDM] = 1800
DEFAULT_TIMELIMIT[gameServerMapModes.TEAMDEATHMATCH] = 1800
DEFAULT_TIMELIMIT[gameServerMapModes.DOMINATION] = 1800
DEFAULT_TIMELIMIT[gameServerMapModes.CAPTURETHEFLAG] = 1800
DEFAULT_TIMELIMIT[gameServerMapModes.OBLITERATION] = 1800
DEFAULT_TIMELIMIT[gameServerMapModes.ELIMINATION] = 600
DEFAULT_TIMELIMIT[gameServerMapModes.AIRSUPERIORITY] = 1800
DEFAULT_TIMELIMIT[gameServerMapModes.SQUADOBLITERATION] = 1800

export const getPlayersByTeamId = (snapshot, teamId) => {
  return Object.values(snapshot.teamInfo[teamId].players).sort(
    (a, b) => b.score - a.score
  )
}

export const createScoreboardData = (recievedQueryInfo) => {
  var queryInfo = { result: {} }

  try {
    if (recievedQueryInfo.status != 'SUCCESS') {
      switch (recievedQueryInfo.status) {
        // query support off
        case 'ERROR_RECVFROM_FAILED':
        // protocol mismatch between server and client
        case 'ERROR_PROTOCOL_VERSION':
          queryInfo.status = 'NOT_SUPPORTED'
          break

        //  fail or timeout
        case 'ERROR_SELECT_FAILED_OR_TIMEDOUT':
          queryInfo.status = 'TIMEOUT'
          break

        default:
          queryInfo.status = 'UNKNOWN_ERROR'
      }

      return queryInfo
    }

    // Don't support Elimination (defuse)
    var gameModeEnum = gameModeToEnum(recievedQueryInfo.gameMode)
    if (unsupportedGameModes.indexOf(gameModeEnum) !== -1 || !gameModeEnum) {
      queryInfo.status = 'NOT_SUPPORTED'
      return queryInfo
    }

    var result = { teams: [] }

    result.gameId = recievedQueryInfo.gameId
    result.gameMode = gameModeEnum
    result.mapVariant = recievedQueryInfo.mapVariant
    result.mapName = recievedQueryInfo.currentMap.split('/').pop()
    result.maxPlayers = recievedQueryInfo.maxPlayers
    result.queueingPlayers = recievedQueryInfo.waitingPlayers

    try {
      result.roundTime = parseInt(recievedQueryInfo.roundTime, 10)
      result.defaultRoundTimeMultiplier = parseInt(
        recievedQueryInfo.defaultRoundTimeMultiplier,
        10
      )
      result.timelimit =
        DEFAULT_TIMELIMIT[recievedQueryInfo.gameMode.toUpperCase()] || 0
      if (result.timelimit !== 0 && result.defaultRoundTimeMultiplier !== 0) {
        result.timelimit *= result.defaultRoundTimeMultiplier
      }
    } catch (e) {
      result.roundTime = 0
      result.defaultRoundTimeMultiplier = 0
      result.timelimit = 0
    }

    if (recievedQueryInfo.hasOwnProperty('conquest')) {
      Object.entries(recievedQueryInfo['conquest']).forEach(
        ([teamId, teamInfo]) => {
          var team = { status: {}, players: [] }

          team.status.teamId = +teamId
          team.status.tickets = teamInfo.tickets
          team.status.ticketsMax = teamInfo.ticketsMax

          var teamDetails = recievedQueryInfo['teamInfo'][teamId]
          if (teamDetails != null) {
            team.status.faction = teamDetails.faction
          }

          result.teams.push(team)
        }
      )
    } else if (recievedQueryInfo.hasOwnProperty('deathmatch')) {
      Object.entries(recievedQueryInfo['deathmatch']).forEach(
        ([teamId, teamInfo]) => {
          var team = { status: {}, players: [] }

          team.status.teamId = +teamId
          team.status.tickets = teamInfo.kills
          team.status.ticketsMax = teamInfo.killsMax

          var teamDetails = recievedQueryInfo['teamInfo'][teamId]
          if (teamDetails != null) {
            team.status.faction = teamDetails.faction
          }

          result.teams.push(team)
        }
      )
    } else if (recievedQueryInfo.hasOwnProperty('rush')) {
      Object.entries(recievedQueryInfo['rush']).forEach(
        ([teamType, teamInfo]) => {
          var team = { status: {}, players: [] }

          team.status.teamId = +teamInfo.team
          team.status.teamType = teamType

          if (teamType == 'attackers') {
            team.status.tickets = teamInfo.tickets
            team.status.ticketsMax = teamInfo.ticketsMax
          } else if (teamType == 'defenders') {
            team.status.tickets = teamInfo.bases
            team.status.ticketsMax = teamInfo.basesMax
          }

          result.teams.push(team)
        }
      )
    } else if (recievedQueryInfo.hasOwnProperty('gunMaster')) {
      result.maxGunMasterLevel =
        recievedQueryInfo['gunMaster']['maxGunMasterLevel']

      // We know
      var team1 = { status: {}, players: [] }
      var team2 = { status: {}, players: [] }

      team1.status.teamId = 1
      team2.status.teamId = 2

      result.teams.push(team1)
      result.teams.push(team2)
    } else if (recievedQueryInfo.hasOwnProperty('captureTheFlag')) {
      Object.entries(recievedQueryInfo['captureTheFlag']).forEach(
        ([teamId, teamInfo]) => {
          var team = { status: {}, players: [] }

          team.status.teamId = +teamId
          team.status.flags = teamInfo.flags
          team.status.flagsMax = teamInfo.flagsMax
          team.status.roundTimeMax = teamInfo.roundTimeMax

          var teamDetails = recievedQueryInfo['teamInfo'][teamId]
          if (teamDetails != null) {
            team.status.faction = teamDetails.faction
          }

          result.teams.push(team)
        }
      )
    } else if (
      recievedQueryInfo.gameMode === 'CarrierAssaultLarge' ||
      recievedQueryInfo.gameMode === 'CarrierAssaultSmall'
    ) {
      if (!recievedQueryInfo['carrierAssault']) {
        // Old server build is not supported
        queryInfo.status = 'NOT_SUPPORTED'
        return queryInfo
      }
      Object.entries(recievedQueryInfo['carrierAssault']).forEach(
        ([teamId, teamInfo]) => {
          if (teamId === '0') {
            return
          }
          var team = { status: {}, players: [] }
          team.status.teamId = +teamId
          team.status.carrierHealth = teamInfo.carrierHealth || 0
          team.status.objectivesDestroyed = teamInfo.explodedCrates || 0
          result.teams.push(team)
        }
      )
    } else if (recievedQueryInfo.hasOwnProperty('gunmaster')) {
      result.teams[0] = {
        status: { teamId: '0', highestLevel: 0 },
        players: [],
      }
      Object.entries(recievedQueryInfo.teamInfo).forEach(([index, team]) => {
        Object.entries(team.players).forEach(([personaId, player]) => {
          player.gunMasterLevel =
            recievedQueryInfo.gunmaster[personaId + '_level']
          player.personaId = personaId
          if (result.teams[0].status.highestLevel < player.gunMasterLevel) {
            result.teams[0].status.highestLevel = player.gunMasterLevel
          }
          result.teams[0].players.push(player)
        })
      })
    } else {
      queryInfo.status = 'ROUND_NOT_STARTED'
      return queryInfo
    }

    Object.entries(result.teams).forEach(([index, team]) => {
      var teamDetails = recievedQueryInfo.teamInfo[team.status.teamId]
      if (teamDetails != null) {
        Object.entries(teamDetails['players']).forEach(
          ([personaId, playerInfo]) => {
            var player = playerInfo
            player.personaId = personaId
            team.players.push(player)
          }
        )
        team.players = team.players
          .sort(function (a, b) {
            return a.score - b.score
          })
          .reverse()
      }
    })

    // TODO: Remove this hack when it's been fixed in the plugin
    // Hack to remove the two extra teams from TDM
    if (gameModeEnum === 32 && result.teams.length > 2) {
      result.teams.splice(2)
    }

    queryInfo.status = 'OK'
    queryInfo.result = result
    return queryInfo
  } catch (e) {
    console.error(e.stack)
    queryInfo.status = 'INVALID_RESPONSE'
    return queryInfo
  }
}

const getFactionLabel = (faction) => {
  switch (faction) {
    case 0:
      return 'US'
    case 1:
      return 'RU'
    case 2:
      return 'CN'
    default:
      return 'US'
  }
}

/**
 * Get teams order
 * @param {Array} teams - Teams list
 * @param {Number} playerTeam - Own player team ID (if exists)
 */
const getTeamsOrder = (teams, playerTeam) => {
  let teamsList = teams
  let teamsOrder = []

  // Sort teams by score if more than 2 teams
  if (teamsList.length > 2) {
    teamsList = multisort(teamsList, 'score', 'desc')
  }

  // Add player team to the order if it exists
  if (
    typeof teamsList != 'undefined' &&
    teamsList !== null &&
    get(teams, playerTeam)
  ) {
    teamsOrder = [toint(playerTeam)]
  }

  // Add remaining teams to the order
  teamsList.forEach((team) => {
    if (!teamsOrder.includes(team.status.teamId)) {
      teamsOrder.push(team.status.teamId)
    }
  })

  return teamsOrder
}
