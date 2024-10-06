import Fastify from 'fastify'
import Handlebars from 'handlebars'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import axios from 'axios'
import { createScoreboardData } from './helpers/teamHelpers.mjs'
import {
  getMatchInformation,
  localizedPoints,
  getTeamInfo,
  showFooter,
  formatForScoreboardTemplate,
} from './helpers/warsawHelpers.mjs'

import { upsertImageToWebhook } from './discord/discordClient.mjs'

// Get the current directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fastify = Fastify({ logger: true })

// Define the Handlebars helper
Handlebars.registerHelper('formatNumber', function (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

Handlebars.registerHelper('inc', function (value) {
  return parseInt(value) + 1
})

Handlebars.registerHelper('eq', function (a, b) {
  return a === b
})

Handlebars.registerHelper('gt', function (a, b) {
  if (typeof a === 'object' && a !== null) {
    a = Object.keys(a).length
  }
  return a > b
})

Handlebars.registerHelper('localizedPoints', function (data) {
  return localizedPoints(data.gameMode)
})

Handlebars.registerHelper('localizedTeamInfo', function (data) {
  const currentTeam = this
  // console.log('data', data)
  // console.log('currentTeam', currentTeam)
  return getTeamInfo(data.gameMode, currentTeam)
})

Handlebars.registerHelper('showFooter', function (data) {
  return showFooter(data.gameMode)
})

Handlebars.registerHelper('teamKills', function () {
  const currentTeam = this
  return currentTeam.players.reduce((acc, player) => acc + player.kills, 0)
})

Handlebars.registerHelper('teamDeaths', function () {
  const currentTeam = this
  return currentTeam.players.reduce((acc, player) => acc + player.deaths, 0)
})

Handlebars.registerHelper('teamScore', function () {
  const currentTeam = this
  return currentTeam.players
    .reduce((acc, player) => acc + player.score, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

const scoreboardTemplatePath = path.join(
  __dirname,
  'templates',
  'scoreboard.html'
)
const scoreboardTemplateContent = await fs.readFile(
  scoreboardTemplatePath,
  'utf-8'
)
const scoreboardTemplate = Handlebars.compile(scoreboardTemplateContent)

fastify.post('/render', async (request, reply) => {
  const { snapshot } = request.body

  // Check exports.createLiveScoreboardData from battlelog bundles for more information

  const scoreboardData = createScoreboardData(snapshot)
  // console.log(scoreboardData)
  // console.log(JSON.stringify(scoreboardData))
  // console.log()
  // console.log(getMatchInformation(scoreboardData))

  // console.log(
  //   JSON.stringify(scoreboardData)
  // )

  const matchInfo = getMatchInformation(scoreboardData)
  const formattedScoreboardData = formatForScoreboardTemplate(
    scoreboardData.result
  )

  // console.log(matchInfo, JSON.stringify(formattedScoreboardData))

  const rendered = scoreboardTemplate({
    matchInfo,
    data: formattedScoreboardData,
  })

  // const rendered = scoreboardTemplate({
  //   scoreboard: scoreboardData.result || {},
  //   matchInfo: getMatchInformation(scoreboardData),
  // })

  //   reply.send(rendered)

  try {
    const response = await axios.post(
      'http://localhost:3000/api/html/render?element=%23server-players-list',
      rendered,
      {
        headers: {
          'Content-Type': 'text/plain',
        },
        responseType: 'arraybuffer',
      }
    )

    // upsertImageToWebhook({
    //   serverGuid: process.env.SERVER_GUID,
    //   snapshot: snapshot,
    //   matchInfo,
    //   scoreboardData: formattedScoreboardData,
    //   image: response.data,
    // })

    reply.type('image/png').send(response.data)
  } catch (err) {
    fastify.log.error(err)
    reply.status(500).send({ error: 'Failed to render image' })
  }
})

fastify.post('/renderByGuid/:guid', async (request, reply) => {
  const { guid } = request.params

  // Get the snapshot from Battlelog https://keeper.battlelog.com/snapshot/:guid
  const snapshotResponse = await axios.get(
    `https://keeper.battlelog.com/snapshot/${guid}`
  )

  // If status is not 200, return the error
  if (snapshotResponse.status !== 200) {
    return reply.status(snapshotResponse.status).send(snapshotResponse.data)
  }

  const snapshot = snapshotResponse.data.snapshot
  const scoreboardData = createScoreboardData(snapshot)

  const matchInfo = getMatchInformation(scoreboardData)
  const formattedScoreboardData = formatForScoreboardTemplate(
    scoreboardData.result
  )
  const rendered = scoreboardTemplate({
    matchInfo,
    data: formattedScoreboardData,
  })

  try {
    const response = await axios.post(
      'http://localhost:3000/api/html/render?element=%23server-players-list',
      rendered,
      {
        headers: {
          'Content-Type': 'text/plain',
        },
        responseType: 'arraybuffer',
      }
    )

    upsertImageToWebhook({
      serverGuid: guid,
      snapshot: snapshot,
      matchInfo,
      scoreboardData: formattedScoreboardData,
      image: response.data,
    })

    reply.type('image/png').send(response.data)
  } catch (err) {
    fastify.log.error(err)
    reply.status(500).send({ error: 'Failed to render image' })
  }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3111 })
    console.log('Server listening on http://localhost:3111')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
