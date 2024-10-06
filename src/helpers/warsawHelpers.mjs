import {
  get,
  set,
  eq,
  neq,
  sub,
  contains,
  count,
  gt,
  timer,
  capitalize,
  multisort,
  toint,
} from './surface.mjs'
import { games, gameserver } from './gameData.mjs'

const localizations = []
localizations['ID_WEB_BATTLEREPORT_TEAM_1'] = 'Team A'
localizations['ID_WEB_BATTLEREPORT_TEAM_2'] = 'Team B'
localizations['ID_WEB_BATTLEREPORT_TEAM_3'] = 'Team C'
localizations['ID_WEB_BATTLEREPORT_TEAM_4'] = 'Team D'
localizations['ID_WEB_BATTLEREPORT_TEAM_ATTACKERS'] = 'Attacker'
localizations['ID_WEB_BATTLEREPORT_TEAM_ATTACKER_RU'] = 'RU Attacker'
localizations['ID_WEB_BATTLEREPORT_TEAM_ATTACKER_US'] = 'US Attacker'
localizations['ID_WEB_BATTLEREPORT_TEAM_CN'] = 'CN'
localizations['ID_WEB_BATTLEREPORT_TEAM_CR'] = 'CR'
localizations['ID_WEB_BATTLEREPORT_TEAM_DEFENDERS'] = 'Defender'
localizations['ID_WEB_BATTLEREPORT_TEAM_DEFENDER_RU'] = 'RU Defender'
localizations['ID_WEB_BATTLEREPORT_TEAM_DEFENDER_US'] = 'US Defender'
localizations['ID_WEB_BATTLEREPORT_TEAM_LE'] = 'LE'
localizations['ID_WEB_BATTLEREPORT_TEAM_RU'] = 'RU'
localizations['ID_WEB_BATTLEREPORT_TEAM_US'] = 'US'

export const getMatchInformation = (scoreboard) => {
  if (
    typeof scoreboard != 'undefined' &&
    scoreboard !== null &&
    eq(get(scoreboard, 'status'), 'OK')
  ) {
    const matchInfoStr = []
    let maxTickets

    const result = get(scoreboard, 'result', {})

    if (
      contains(gameModeCategories.ticket, result.gameMode) ||
      contains(gameModeCategories.kill, result.gameMode)
    ) {
      maxTickets = get(
        get(get(get(result, 'teams', []), 0), 'status', {}),
        'ticketsMax',
        0
      )
    }

    matchInfoStr.push(maps.find((map) => map.id === result.mapName).label)
    matchInfoStr.push(' - ')
    matchInfoStr.push(localizedGameMode(games.WARSAW, result.gameMode))

    if (
      gt(
        typeof maxTickets != 'undefined' && maxTickets !== null
          ? maxTickets
          : 0,
        0
      )
    ) {
      matchInfoStr.push(': ')
      matchInfoStr.push(maxTickets)
    }

    matchInfoStr.push(' - ')
    matchInfoStr.push('Round time')
    matchInfoStr.push(': ')
    matchInfoStr.push(timer(result.roundTime))

    return matchInfoStr.join('')
  } else if (eq(get(scoreboard, 'status'), 'ROUND_NOT_STARTED')) {
    return 'The round has not started yet.'
  }

  return 'Live scoreboard is not supported on this server.'
}

export const formatForScoreboardTemplate = (data) => {
  const tpl = {}
  tpl.gameId = get(data, 'gameId')
  tpl.gameMode = get(data, 'gameMode')
  tpl.type = 'live'

  const teams = get(data, 'teams', [])
  if (teams.length > 0) {
    teams.forEach((team) => {
      const teamTpl = {}
      teamTpl.id = team.status.teamId

      if (
        typeof team != 'undefined' &&
        team !== null &&
        typeof team.status != 'undefined' &&
        team.status !== null &&
        typeof team.status.faction != 'undefined' &&
        team.status.faction !== null
      ) {
        teamTpl.name = getFactionLabel(team.status.faction)
      } else if (
        typeof team != 'undefined' &&
        team !== null &&
        typeof team.status != 'undefined' &&
        team.status !== null &&
        typeof team.status.teamType != 'undefined' &&
        team.status.teamType !== null
      ) {
        teamTpl.name = team.status.teamType
      } else {
        teamTpl.name = getFactionLabel(sub(team.status.teamId, 1))
      }

      if (contains(gameModeCategories.flag, data.gameMode)) {
        teamTpl.score = team.status.flags
        teamTpl.scoreMax = team.status.flagsMax
      } else if (contains(gameModeCategories.carrier, data.gameMode)) {
        teamTpl.carrierHealth = team.status.carrierHealth
        teamTpl.objectivesDestroyed = team.status.objectivesDestroyed
      } else {
        teamTpl.score = team.status.tickets
        teamTpl.scoreMax = team.status.ticketsMax
      }

      tpl.players =
        typeof tpl != 'undefined' &&
        tpl !== null &&
        typeof tpl.players != 'undefined' &&
        tpl.players !== null
          ? tpl.players
          : {}
      teamTpl.players = []
      teamTpl.commanders = []

      const players = get(team, 'players', [])
      if (players.length > 0) {
        players.forEach((player) => {
          player.team = team.id

          if (eq(get(player, 'role', 1), 2)) {
            player.commanderScore = get(player, 'score', 0)
            teamTpl.commanders.push(player)
          } else {
            player.combatScore = get(player, 'score', 0)
            teamTpl.players.push(player)
          }

          tpl.players = set(tpl.players, player.personaId, player)
        })
      }

      tpl.teams =
        typeof tpl != 'undefined' &&
        tpl !== null &&
        typeof tpl.teams != 'undefined' &&
        tpl.teams !== null
          ? tpl.teams
          : {}
      tpl.teams = set(tpl.teams, teamTpl.id, teamTpl)
    })
  }

  // Order the teams
  let teamsOrder
  if (tpl.gameMode === gameModeToEnum('GUNMASTER')) {
    teamsOrder = [0, 1]
  } else {
    teamsOrder = getTeamsOrder(tpl.teams, null)
  }

  const orderedTeams = {}
  teamsOrder.forEach((teamId, index) => {
    const teamIndex = teamsOrder.indexOf(teamId)

    if (tpl.teams[teamId]) {
      orderedTeams[teamIndex + 1] = tpl.teams[teamId]
    }
  })

  tpl.teams = orderedTeams

  return tpl
}

export const localizedPoints = (gameMode) => {
  if (eq(gameMode, gameServerMapModes.GUNMASTER)) {
    return 'Level'
  } else {
    return 'Score'
  }
}

export const showFooter = (gameMode) => {
  if (eq(gameMode, gameServerMapModes.GUNMASTER)) {
    return false
  } else {
    return true
  }
}

export const getTeamInfo = (gameMode, team) => {
  // Team name
  let teamName
  if (eq(gameMode, gameServerMapModes.GUNMASTER)) {
    teamName = 'Players'
  } else {
    const teamLocaleName = `ID_WEB_BATTLEREPORT_TEAM_${team.name.toUpperCase()}`
    teamName = localizations[teamLocaleName] || teamLocaleName
  }

  if (eq(gameMode, gameServerMapModes.SQDM)) {
    const teamLocaleName = getSquadLocale(team.id)
    teamName = `${localizations[teamLocaleName] || teamLocaleName} Squad`
  }

  // Info format
  const teamInfoStr = []
  if (contains(gameModeCategories.carrier, gameMode)) {
    teamInfoStr.push(teamName)
    teamInfoStr.push(' - ')
    teamInfoStr.push(get(team, 'carrierHealth', 100))
    teamInfoStr.push('% - ')
    teamInfoStr.push(get(team, 'objectivesDestroyed', 0))
    teamInfoStr.push('/2')
  } else {
    teamInfoStr.push(teamName)
    if (neq(gameMode, gameServerMapModes.GUNMASTER)) {
      teamInfoStr.push(' - ')
      teamInfoStr.push(get(team, 'score'))
    }
  }

  return teamInfoStr.join('')
}

export const getGameModeCategories = () => {
  const gameServerMapMode = gameServerMapModes
  return {
    ticket: [
      gameServerMapMode.CONQUEST,
      gameServerMapMode.CONQUESTLARGE,
      gameServerMapMode.CONQUESTASSAULTSMALL,
      gameServerMapMode.CONQUESTASSAULTLARGE,
      gameServerMapMode.DOMINATION,
      gameServerMapMode.TANKSUPERIORITY,
      gameServerMapMode.SCAVENGER,
      gameServerMapMode.AIRSUPERIORITY,
    ],
    life: [
      gameServerMapMode.RUSH,
      gameServerMapMode.SQRUSH,
      gameServerMapMode.ELIMINATION,
      gameServerMapMode.OBLITERATION,
      gameServerMapMode.SQUADOBLITERATION,
    ],
    kill: [
      gameServerMapMode.SQDM,
      gameServerMapMode.TEAMDEATHMATCH,
      gameServerMapMode.GUNMASTER,
      gameServerMapMode.TEAMDEATHMATCHC,
    ],
    flag: [gameServerMapMode.CAPTURETHEFLAG],
    carrier: [
      gameServerMapMode.CARRIERASSAULT,
      gameServerMapMode.CARRIERASSAULTLARGE,
      gameServerMapMode.CARRIERASSAULTSMALL,
    ],
    chainlink: [gameServerMapMode.CHAINLINK],
  }
}

export const localizedGameMode = (game, gameMode) => {
  let gameserverData
  let gameModeString
  if (eq(game, 2048) || eq(game, 8192)) {
    gameserverData = gameserver // Doesn't support 8192
    gameModeString = get(
      gameserverData.serverGamemodeLookup,
      typeof gameMode != 'undefined' && gameMode !== null ? gameMode : 0,
      ''
    )
    if (eq(game, 8192)) {
      gameModeString = capitalize(gameModeString)
    }
    return gameModeString
  } else {
    const gameModeStrings = {
      0: 'Unknown',
      1: 'Conquest',
      1024: 'Domination',
      1048576: 'Hotspot',
      128: 'Conquest Assault Large',
      131072: 'Tank Superiority',
      16: 'Onslaught',
      16384: 'Sector Control',
      2: 'Rush',
      2048: 'Team DM Close Quarters',
      2097152: 'Obliteration',
      256: 'Conquest Assault',
      262144: 'Objective Raid',
      32: 'Team Deathmatch',
      32768: 'Fire Team Survivor',
      4: 'Squad Rush',
      4096: 'Team DM Fireteam',
      4194304: 'Scavenger',
      512: 'Gun Master',
      524288: 'Capture the Flag',
      64: 'Conquest Large',
      65536: 'Home Run',
      8: 'Squad Deathmatch',
      8192: 'Combat Mission',
      8388608: 'Air Superiority',
      33554432: 'Carrier Assault',
      67108864: 'Carrier Assault Large',
      134217728: 'Carrier Assault',
    }
    return get(
      gameModeStrings,
      typeof gameMode != 'undefined' && gameMode !== null ? gameMode : 0
    )
  }
}

export const gameModeToEnum = function (gameModeString) {
  if (!gameModeString) {
    console.warn('Illegal gameMode string')
    return null
  }

  gameModeString = gameModeString.toUpperCase()
  switch (gameModeString) {
    case 'UNKNOWN':
    case 'NONE':
    case 'CONQUESTSMALL':
    case 'CONQUEST':
      return gameServerMapModes.CONQUEST

    case 'RUSH':
    case 'RUSHLARGE':
    case 'RUSHSMALL':
      return gameServerMapModes.RUSH

    case 'SQDM':
    case 'SQUADDEATHMATCH':
      return gameServerMapModes.SQDM

    case 'SQRUSH':
    case 'SQUADRUSH':
      return gameServerMapModes.SQRUSH

    case 'CARRIERASSAULT':
    case 'CARRIERASSAULTLARGE':
    case 'CARRIERASSAULTSMALL':
      return gameServerMapModes.CARRIERASSAULT

    default:
      if (gameServerMapModes[gameModeString]) {
        return gameServerMapModes[gameModeString]
      }
  }
  return console.warn('Unknown gameMode: ' + gameModeString)
}

export const gameServerMapModes = {
  TEAMDEATHMATCH: 32,
  RUSHSMALL: 2,
  CONQUESTASSAULTLARGE: 128,
  BOUNTYHUNTER: 274877906944,
  UNKNOWN: 1,
  CARRIERASSAULTSMALL: 134217728,
  GUNMASTER: 512,
  DOMINATION: 1024,
  CASHGRAB: 274877906944,
  SQUADDEATHMATCH: 8,
  BLOODMONEY: 268435456,
  CARRIERASSAULT: 33554432,
  OBJECTIVERAID: 262144,
  CONQUESTSMALL: 1,
  CONQUEST_LADDER: 68719476736,
  BOMBSQUAD: 1048576,
  TANKSUPERIORITY: 131072,
  NONE: 1,
  HIT: 8589934592,
  COMBATMISSION: 8192,
  HOSTAGE: 17179869184,
  CONQUESTASSAULTSMALL: 256,
  AIRSUPERIORITY: 8388608,
  SQOBLITERATION: 137438953472,
  HOTWIRE: 4294967296,
  CONQUESTLARGE: 64,
  SQRUSH: 4,
  SCAVENGER: 4194304,
  SPORT: 65536,
  HEIST: 2147483648,
  SQHEIST: 549755813888,
  SQUADOBLITERATION: 137438953472,
  TURFWARLARGE: 1073741824,
  RUSHLARGE: 2,
  TEAMDEATHMATCH_FIRETEAM: 4096,
  CONQUEST: 1,
  RUSH: 2,
  SQUADHEIST: 549755813888,
  OBLITERATION: 2097152,
  FIRETEAM_SURVIVOR: 32768,
  TEAMDEATHMATCHC: 2048,
  ONSLAUGHT: 16,
  SQDM: 8,
  SECTORCONTROL: 16384,
  CARRIERASSAULTLARGE: 67108864,
  SQUADRUSH: 4,
  CHAINLINK: 34359738368,
  CAPTURETHEFLAG: 524288,
  ELIMINATION: 16777216,
  TURFWARSMALL: 536870912,
}

export const gameModeCategories = {
  ticket: [1, 64, 256, 128, 1024, 131072, 4194304, 8388608],
  life: [2, 4, 16777216, 2097152, 137438953472],
  kill: [8, 32, 512, 2048],
  flag: [524288],
  carrier: [33554432, 67108864, 134217728],
  chainlink: [34359738368],
}

export const getFactionLabel = (faction) => {
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

export const getSquadLocale = (squadId) => {
  return get(get(squadNames, squadId, {}), 'nameSID', '')
}

const gamemodes = [
  { id: 64, label: 'Conquest Large', platforms: [1, 4, 32, 2, 64] },
  { id: 1, label: 'Conquest', platforms: [1, 4, 32, 2, 64] },
  { id: 2097152, label: 'Obliteration', platforms: [1, 4, 32, 2, 64] },
  { id: 1024, label: 'Domination', platforms: [1, 4, 32, 2, 64] },
  { id: 2, label: 'Rush', platforms: [1, 4, 32, 2, 64] },
  { id: 8, label: 'Squad Deathmatch', platforms: [1, 4, 32, 2, 64] },
  { id: 32, label: 'Team Deathmatch', platforms: [1, 4, 32, 2, 64] },
  { id: 16777216, label: 'Defuse', platforms: [1, 4, 32, 2, 64] },
  { id: 8388608, label: 'Air Superiority', platforms: [1, 4, 32, 2, 64] },
  { id: 524288, label: 'Capture the Flag', platforms: [1, 4, 32, 2, 64] },
  {
    id: 67108864,
    label: 'Carrier Assault Large',
    platforms: [1, 4, 32, 2, 64],
  },
  { id: 134217728, label: 'Carrier Assault', platforms: [1, 4, 32, 2, 64] },
  { id: 34359738368, label: 'Chain Link', platforms: [1, 4, 32, 2, 64] },
  { id: 68719476736, label: 'Conquest Ladder', platforms: [1, 4, 32, 2, 64] },
  {
    id: 137438953472,
    label: 'Squad Obliteration',
    platforms: [1, 4, 32, 2, 64],
  },
  { id: 512, label: 'Gun Master', platforms: [1, 4, 32, 2, 64] },
]

const mapLookup = {
  MP_Abandoned: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Abandoned',
    label: 'Zavod 311',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_Damage: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Damage',
    label: 'Lancang Dam',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_Flooded: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Flooded',
    label: 'Flood Zone',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_Journey: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Journey',
    label: 'Golmud Railway',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_Naval: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Naval',
    label: 'Paracel Storm',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_Prison: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Prison',
    label: 'Operation Locker',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_Resort: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Resort',
    label: 'Hainan Resort',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_Siege: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Siege',
    label: 'Siege of Shanghai',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_TheDish: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_TheDish',
    label: 'Rogue Transmission',
    platforms: [1, 4, 32, 2, 64],
  },
  MP_Tremors: {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Tremors',
    label: 'Dawnbreaker',
    platforms: [1, 4, 32, 2, 64],
  },
  XP0_Caspian: {
    gameExpansion: 524288,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP0_Caspian',
    label: 'CASPIAN BORDER 2014',
    platforms: [1, 4, 32, 2, 64],
  },
  XP0_Firestorm: {
    gameExpansion: 524288,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP0_Firestorm',
    label: 'OPERATION FIRESTORM 2014',
    platforms: [1, 4, 32, 2, 64],
  },
  XP0_Metro: {
    gameExpansion: 524288,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP0_Metro',
    label: 'OPERATION METRO 2014',
    platforms: [1, 4, 32, 2, 64],
  },
  XP0_Oman: {
    gameExpansion: 524288,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP0_Oman',
    label: 'GULF OF OMAN 2014',
    platforms: [1, 4, 32, 2, 64],
  },
  XP1_001: {
    gameExpansion: 1048576,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
    ],
    id: 'XP1_001',
    label: 'SILK ROAD',
    platforms: [1, 4, 32, 2, 64],
  },
  XP1_002: {
    gameExpansion: 1048576,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
    ],
    id: 'XP1_002',
    label: 'ALTAI RANGE',
    platforms: [1, 4, 32, 2, 64],
  },
  XP1_003: {
    gameExpansion: 1048576,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
    ],
    id: 'XP1_003',
    label: 'GUILIN PEAKS',
    platforms: [1, 4, 32, 2, 64],
  },
  XP1_004: {
    gameExpansion: 1048576,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
    ],
    id: 'XP1_004',
    label: 'DRAGON PASS',
    platforms: [1, 4, 32, 2, 64],
  },
  XP2_001: {
    gameExpansion: 2097152,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
      137438953472,
    ],
    id: 'XP2_001',
    label: 'LOST ISLANDS',
    platforms: [1, 4, 32, 2, 64],
  },
  XP2_002: {
    gameExpansion: 2097152,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
      137438953472,
    ],
    id: 'XP2_002',
    label: 'NANSHA STRIKE',
    platforms: [1, 4, 32, 2, 64],
  },
  XP2_003: {
    gameExpansion: 2097152,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
      137438953472,
    ],
    id: 'XP2_003',
    label: 'WAVE BREAKER',
    platforms: [1, 4, 32, 2, 64],
  },
  XP2_004: {
    gameExpansion: 2097152,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
      137438953472,
    ],
    id: 'XP2_004',
    label: 'OPERATION MORTAR',
    platforms: [1, 4, 32, 2, 64],
  },
  XP3_MarketPl: {
    gameExpansion: 4194304,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
      137438953472,
    ],
    id: 'XP3_MarketPl',
    label: 'PEARL MARKET',
    platforms: [1, 4, 32, 2, 64],
  },
  XP3_Prpganda: {
    gameExpansion: 4194304,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
      137438953472,
    ],
    id: 'XP3_Prpganda',
    label: 'PROPAGANDA',
    platforms: [1, 4, 32, 2, 64],
  },
  XP3_UrbanGdn: {
    gameExpansion: 4194304,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
      137438953472,
    ],
    id: 'XP3_UrbanGdn',
    label: 'LUMPHINI GARDEN',
    platforms: [1, 4, 32, 2, 64],
  },
  XP3_WtrFront: {
    gameExpansion: 4194304,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
      137438953472,
    ],
    id: 'XP3_WtrFront',
    label: 'SUNKEN DRAGON',
    platforms: [1, 4, 32, 2, 64],
  },
  XP4_Arctic: {
    gameExpansion: 8388608,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP4_Arctic',
    label: 'OPERATION WHITEOUT',
    platforms: [1, 4, 32, 2, 64],
  },
  XP4_SubBase: {
    gameExpansion: 8388608,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP4_SubBase',
    label: 'HAMMERHEAD',
    platforms: [1, 4, 32, 2, 64],
  },
  XP4_Titan: {
    gameExpansion: 8388608,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP4_Titan',
    label: 'HANGAR 21',
    platforms: [1, 4, 32, 2, 64],
  },
  XP4_WlkrFtry: {
    gameExpansion: 8388608,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP4_WlkrFtry',
    label: 'GIANTS OF KARELIA',
    platforms: [1, 4, 32, 2, 64],
  },
  XP5_Night_01: {
    gameExpansion: 268435456,
    gameModes: [1, 2, 32, 64, 512, 1024, 2097152, 137438953472],
    id: 'XP5_Night_01',
    label: 'ZAVOD: GRAVEYARD SHIFT',
    platforms: [1, 4, 32, 2, 64],
  },
  XP6_CMP: {
    gameExpansion: 8589934592,
    gameModes: [
      1, 2, 8, 32, 64, 512, 1024, 524288, 2097152, 34359738368, 137438953472,
    ],
    id: 'XP6_CMP',
    label: 'OPERATION OUTBREAK',
    platforms: [1, 4, 32, 2, 64],
  },
  XP7_Valley: {
    gameExpansion: 17179869184,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 8388608, 137438953472],
    id: 'XP7_Valley',
    label: 'DRAGON VALLEY 2015',
    platforms: [1, 4, 32, 2, 64],
  },
}

const maps = [
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Resort',
    label: 'Hainan Resort',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 524288,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP0_Firestorm',
    label: 'OPERATION FIRESTORM 2014',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Prison',
    label: 'Operation Locker',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 8388608,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP4_SubBase',
    label: 'HAMMERHEAD',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Abandoned',
    label: 'Zavod 311',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Tremors',
    label: 'Dawnbreaker',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Siege',
    label: 'Siege of Shanghai',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_TheDish',
    label: 'Rogue Transmission',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 1048576,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
    ],
    id: 'XP1_003',
    label: 'GUILIN PEAKS',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 1048576,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
    ],
    id: 'XP1_002',
    label: 'ALTAI RANGE',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 1048576,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
    ],
    id: 'XP1_001',
    label: 'SILK ROAD',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Flooded',
    label: 'Flood Zone',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 8388608,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP4_Titan',
    label: 'HANGAR 21',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 1048576,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 8388608, 16777216, 137438953472,
    ],
    id: 'XP1_004',
    label: 'DRAGON PASS',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 524288,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP0_Metro',
    label: 'OPERATION METRO 2014',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 2097152,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
      137438953472,
    ],
    id: 'XP2_004',
    label: 'OPERATION MORTAR',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 2097152,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
      137438953472,
    ],
    id: 'XP2_001',
    label: 'LOST ISLANDS',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 2097152,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
      137438953472,
    ],
    id: 'XP2_002',
    label: 'NANSHA STRIKE',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 2097152,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 2097152, 16777216, 67108864, 134217728,
      137438953472,
    ],
    id: 'XP2_003',
    label: 'WAVE BREAKER',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Journey',
    label: 'Golmud Railway',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 4194304,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
      137438953472,
    ],
    id: 'XP3_MarketPl',
    label: 'PEARL MARKET',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 4194304,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
      137438953472,
    ],
    id: 'XP3_Prpganda',
    label: 'PROPAGANDA',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 8589934592,
    gameModes: [
      1, 2, 8, 32, 64, 512, 1024, 524288, 2097152, 34359738368, 137438953472,
    ],
    id: 'XP6_CMP',
    label: 'OPERATION OUTBREAK',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 4194304,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
      137438953472,
    ],
    id: 'XP3_UrbanGdn',
    label: 'LUMPHINI GARDEN',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 8388608,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP4_Arctic',
    label: 'OPERATION WHITEOUT',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Naval',
    label: 'Paracel Storm',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 4194304,
    gameModes: [
      1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 34359738368,
      137438953472,
    ],
    id: 'XP3_WtrFront',
    label: 'SUNKEN DRAGON',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 8388608,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP4_WlkrFtry',
    label: 'GIANTS OF KARELIA',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 524288,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP0_Oman',
    label: 'GULF OF OMAN 2014',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 0,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 16777216, 137438953472],
    id: 'MP_Damage',
    label: 'Lancang Dam',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 17179869184,
    gameModes: [1, 2, 8, 32, 64, 512, 1024, 2097152, 8388608, 137438953472],
    id: 'XP7_Valley',
    label: 'DRAGON VALLEY 2015',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 268435456,
    gameModes: [1, 2, 32, 64, 512, 1024, 2097152, 137438953472],
    id: 'XP5_Night_01',
    label: 'ZAVOD: GRAVEYARD SHIFT',
    platforms: [1, 4, 32, 2, 64],
  },
  {
    gameExpansion: 524288,
    gameModes: [1, 2, 8, 32, 64, 1024, 524288, 2097152, 16777216, 137438953472],
    id: 'XP0_Caspian',
    label: 'CASPIAN BORDER 2014',
    platforms: [1, 4, 32, 2, 64],
  },
]

const squadNames = [
  {
    nameSID: 'No squad',
    order: 0,
  },
  {
    nameSID: 'Alpha',
    order: 1,
  },
  {
    nameSID: 'Bravo',
    order: 2,
  },
  {
    nameSID: 'Charlie',
    order: 3,
  },
  {
    nameSID: 'Delta',
    order: 4,
  },
  {
    nameSID: 'Echo',
    order: 5,
  },
  {
    nameSID: 'Foxtrot',
    order: 6,
  },
  {
    nameSID: 'Golf',
    order: 7,
  },
  {
    nameSID: 'Hotel',
    order: 8,
  },
  {
    nameSID: 'India',
    order: 9,
  },
  {
    nameSID: 'Juliet',
    order: 10,
  },
  {
    nameSID: 'Kilo',
    order: 11,
  },
  {
    nameSID: 'Lima',
    order: 12,
  },
  {
    nameSID: 'Mike',
    order: 13,
  },
  {
    nameSID: 'November',
    order: 14,
  },
  {
    nameSID: 'Oscar',
    order: 15,
  },
  {
    nameSID: 'Papa',
    order: 16,
  },
  {
    nameSID: 'Quebec',
    order: 17,
  },
  {
    nameSID: 'Romeo',
    order: 18,
  },
  {
    nameSID: 'Sierra',
    order: 19,
  },
  {
    nameSID: 'Tango',
    order: 20,
  },
  {
    nameSID: 'Uniform',
    order: 21,
  },
  {
    nameSID: 'Victor',
    order: 22,
  },
  {
    nameSID: 'Whiskey',
    order: 23,
  },
  {
    nameSID: 'Xray',
    order: 24,
  },
  {
    nameSID: 'Yankee',
    order: 25,
  },
  {
    nameSID: 'Zulu',
    order: 26,
  },
  {
    nameSID: 'Haggard',
    order: 27,
  },
  {
    nameSID: 'Sweetwater',
    order: 28,
  },
  {
    nameSID: 'Preston',
    order: 29,
  },
  {
    nameSID: 'Redford',
    order: 30,
  },
  {
    nameSID: 'Faith',
    order: 31,
  },
  {
    nameSID: 'Celeste',
    order: 32,
  },
]

/**
 * Get teams order
 * @param {Array} teams - Teams list
 * @param {Number} playerTeam - Own player team ID (if exists)
 */
const getTeamsOrder = (teams, playerTeam) => {
  let teamsList = []
  let teamsOrder = []

  if (count(teams) > 0) {
    for (var team in teams) {
      teamsList.push(teams[team])
    }
  }

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
    if (!teamsOrder.includes(team.id)) {
      teamsOrder.push(toint(team.id))
    }
  })

  return teamsOrder
}
