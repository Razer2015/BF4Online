import { promises as fs } from 'fs'
import path from 'path'

import axios from 'axios'
import dotenv from 'dotenv'
import FormData from 'form-data'

import { getTeamInfo } from '../helpers/warsawHelpers.mjs'
import { getAppDataPath } from '../helpers/pathHelpers.mjs'
import { generateScoreboardImage } from '../battlelog/client.mjs'

// Load environment variables from .env file
dotenv.config()

// Define the Discord webhook URL from environment variables
const webhookUrl = process.env.DISCORD_WEBHOOK_URL
const botName = process.env.DISCORD_BOT_NAME || 'BF4Online'

const cacheFilePath = path.join(getAppDataPath(), 'serverCache.json')

const dataTypes = {
  image: 'image',
  table: 'table',
}

// Upsert the data to the Discord webhook
export async function upsertToWebhook({
  request,
  serverGuid,
  snapshot,
  matchInfo,
  scoreboardData,
  dataType,
}) {
  try {
    // Read the messageId from file if it exists
    let messageId
    try {
      const messageIds = JSON.parse(
        (await fs.readFile(
          path.join(getAppDataPath(), 'messageId.json'),
          'utf8'
        )) || '{}'
      )
      messageId = messageIds[serverGuid]
    } catch (error) {
      request.log.error({ err: error }, 'Error reading messageId file')
    }

    const image =
      dataType === dataTypes.table
        ? null
        : await generateScoreboardImage(matchInfo, scoreboardData)

    // Create form data
    const formData = new FormData()
    if (image) {
      formData.append('file', image, `scoreboard.png`)
    }
    formData.append(
      'payload_json',
      JSON.stringify(
        await generateScoreboardBody({
          request,
          serverGuid,
          snapshot,
          matchInfo,
          scoreboardData,
          dataType,
        })
      )
    )

    if (messageId) {
      // Update the data in the Discord webhook
      await updateInWebhook({
        request,
        messageId,
        serverGuid,
        formData,
      })
    } else {
      // Send the data to the Discord webhook
      await sendToWebhook({
        request,
        serverGuid,
        formData,
      })
    }
  } catch (error) {
    request.log.error({ err: error }, 'Error upserting webhook')
  }
}

// Send the Discord webhook
async function sendToWebhook({ request, serverGuid, formData }) {
  try {
    // Send the request
    const response = await axios.post(webhookUrl, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    })

    // Save the message id to file
    await saveMessageId({ request, serverGuid, messageId: response.data.id })

    request.log.info('Webhook sent successfully')
    request.log.debug(response.data)
  } catch (error) {
    if (error.response?.data) {
      request.log.error({ err: error.response.data }, 'Error sending webhook')
    } else {
      request.log.error({ err: error }, 'Error sending webhook')
    }
  }
}

// Update the Discord webhook
async function updateInWebhook({ request, messageId, serverGuid, formData }) {
  try {
    // Send the request
    const response = await axios.patch(
      `${webhookUrl}/messages/${messageId}`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    )

    request.log.info('Webhook updated successfully')
    request.log.debug(response.data)
  } catch (error) {
    // If the message was not found, send a new message
    if (error.response?.status === 404) {
      await sendToWebhook({
        request,
        serverGuid,
        formData,
      })
      return
    }

    if (error.response?.data) {
      request.log.error({ err: error.response.data }, 'Error updating webhook')
    } else {
      request.log.error({ err: error }, 'Error updating webhook')
    }
  }
}

async function generateScoreboardBody({
  request,
  serverGuid,
  snapshot,
  matchInfo,
  scoreboardData,
  dataType,
}) {
  let serverInfo = {}
  if (serverGuid) {
    serverInfo = {
      title: 'Join us!',
      url: `https://battlelog.battlefield.com/bf4/servers/show/pc/${serverGuid}`,
    }
  }

  const playing =
    scoreboardData.players != null && scoreboardData.players != undefined
      ? Object.keys(scoreboardData.players).length
      : getTotalPlayers(scoreboardData, snapshot.teamInfo)
  const joining = Object.keys(snapshot.teamInfo['0'].players).length

  const teams =
    dataType === dataTypes.table
      ? null
      : Object.values(scoreboardData.teams).map((team) => {
          return {
            name: getTeamInfo(scoreboardData.gameMode, team),
            value: `K/D: ${team.players.reduce((acc, player) => acc + player.kills, 0)}/${team.players.reduce((acc, player) => acc + player.deaths, 0)}`,
            inline: true,
          }
        })

  const serverName = await fetchServerName({ request, serverGuid })

  const teamEmbeds = []
  if (dataType === dataTypes.table) {
    Object.values(scoreboardData.teams).forEach((team) => {
      teamEmbeds.push({
        description: createScoreboardTableForTeam(
          scoreboardData.gameMode,
          team
        ),
      })
    })
  }

  return {
    username: botName,
    content: serverGuid
      ? serverName
        ? `[\`${serverName}\`](https://battlelog.battlefield.com/bf4/servers/show/pc/${serverGuid})`
        : `https://battlelog.battlefield.com/bf4/servers/show/pc/${serverGuid}`
      : '',
    embeds: [
      {
        ...serverInfo,
        description: matchInfo,
        image:
          dataType === dataTypes.table
            ? null
            : { url: 'attachment://scoreboard.png' },
        timestamp: new Date().toISOString(),
        fields: [
          {
            name: 'Playing',
            value: `${playing}/${snapshot.maxPlayers}`,
            inline: true,
          },
          {
            name: 'Joining',
            value: joining,
            inline: true,
          },
          {
            name: 'In queue',
            value: `${snapshot.waitingPlayers}`,
            inline: true,
          },
          ...(teams
            ? [
                {
                  name: '\u200B',
                  value: '\u200B',
                },
                ...teams,
              ]
            : []),
        ],
        footer: {
          text: 'Razer2015/BF4Online',
          icon_url:
            'https://raw.githubusercontent.com/Razer2015/BF4Online/refs/heads/main/assets/github-mark-white.png',
        },
      },
      ...teamEmbeds,
    ],
    attachments: [], // Clear existing attachments when updating
    avatar_url:
      'https://d34ymitoc1pg7m.cloudfront.net/common/menu/section-select-bf4-56d900fe.jpg',
  }
}

const getLongestNameLength = (team) => {
  return Math.max(...team.players.map((player) => player.name.length))
}

const createScoreboardTableForTeam = (gameMode, team) => {
  const teamName = getTeamInfo(gameMode, team)
  const longestNameLength = Math.max(
    getLongestNameLength(team),
    teamName.length
  )
  const padName = (name) => name.padEnd(longestNameLength)

  let table = '```\n'
  table += `╔${'═'.repeat(longestNameLength + 2)}╦═══════╦════════╦═══════╗\n`
  table += `║ ${teamName.padEnd(longestNameLength)} ║ Kills ║ Deaths ║ Score ║\n`
  team.players.forEach((player) => {
    table += `╠${'═'.repeat(longestNameLength + 2)}╬═══════╬════════╬═══════╣\n`
    table += `║ ${padName(player.name)} ║ ${player.kills.toString().padEnd(5)} ║ ${player.deaths.toString().padEnd(6)} ║ ${player.score.toString().padEnd(5)} ║\n`
  })

  const totalKills = team.players.reduce((sum, player) => sum + player.kills, 0)
  const totalDeaths = team.players.reduce(
    (sum, player) => sum + player.deaths,
    0
  )
  const totalScore = team.players.reduce((sum, player) => sum + player.score, 0)

  table += `╠${'═'.repeat(longestNameLength + 2)}╬═══════╬════════╬═══════╣\n`
  table += `║ ${'Total'.padEnd(longestNameLength)} ║ ${totalKills.toString().padEnd(5)} ║ ${totalDeaths.toString().padEnd(6)} ║ ${totalScore.toString().padEnd(5)} ║\n`
  table += `╚${'═'.repeat(longestNameLength + 2)}╩═══════╩════════╩═══════╝\n`
  table += '```'
  return table
}

async function saveMessageId({ request, serverGuid, messageId }) {
  try {
    const messageIds = JSON.parse(
      (await fs.readFile(
        path.join(getAppDataPath(), 'messageId.json'),
        'utf8'
      )) || '{}'
    )
    messageIds[serverGuid] = messageId
    await fs.writeFile(
      path.join(getAppDataPath(), 'messageId.json'),
      JSON.stringify(messageIds)
    )

    request.log.info(`Message ID ${messageId} for server ${serverGuid} saved`)
  } catch (error) {
    request.log.error({ err: error }, 'Error saving message ID')
  }
}

function getTotalPlayers(scoreboardData, teamInfo) {
  if (scoreboardData.players) {
    return scoreboardData.players.length
  } else {
    return Object.keys(teamInfo)
      .filter((team) => team !== '0')
      .reduce(
        (sum, team) => sum + Object.keys(teamInfo[team].players).length,
        0
      )
  }
}

async function fetchServerName({ request, serverGuid }) {
  const cacheDuration = 3600000 // 1 hour in milliseconds
  let cache = {}

  try {
    cache = JSON.parse((await fs.readFile(cacheFilePath, 'utf8')) || '{}')
  } catch (error) {
    request.log.error({ err: error }, 'Error reading cache file')
  }

  const cachedData = cache[serverGuid]
  const currentTime = Date.now()

  if (cachedData && currentTime - cachedData.timestamp < cacheDuration) {
    return cachedData.serverName
  }

  try {
    const response = await axios.get(
      `https://battlelog.battlefield.com/bf4/servers/show/pc/${serverGuid}?json=1`
    )
    const serverName = response.data.message.SERVER_INFO.name

    cache[serverGuid] = {
      serverName,
      timestamp: currentTime,
    }

    await fs.writeFile(cacheFilePath, JSON.stringify(cache))

    return serverName
  } catch (error) {
    request.log.error({ err: error }, 'Error fetching server name')
    throw error
  }
}
