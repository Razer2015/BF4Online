import { promises as fs } from 'fs'

import Fastify from 'fastify'
import dotenv from 'dotenv'
import Handlebars from 'handlebars'
import axios from 'axios'

import { createScoreboardData } from './helpers/teamHelpers.mjs'
import {
  getMatchInformation,
  formatForScoreboardTemplate,
} from './helpers/warsawHelpers.mjs'
import './handlebar-helpers.mjs'
import { upsertImageToWebhook } from './discord/discordClient.mjs'
import { getAppDataPath, getTemplatePath } from './helpers/pathHelpers.mjs'

// Load environment variables from .env file
dotenv.config()

// Get the image API URL from environment variables
const imageApiUrl = process.env.IMAGEAPI_URL

// Get the log level from environment variables
const logLevel = process.env.LOG_LEVEL || 'info'

// Get the current directory name
console.log(`App data path: ${getAppDataPath()}`)

const fastify = Fastify({ logger: { level: logLevel } })

const scoreboardTemplateContent = await fs.readFile(
  getTemplatePath('scoreboard'),
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
      `${imageApiUrl}/api/html/render?element=%23server-players-list`,
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
  const { returnImage } = request.query

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
      `${imageApiUrl}/api/html/render?element=%23server-players-list`,
      rendered,
      {
        headers: {
          'Content-Type': 'text/plain',
        },
        responseType: 'arraybuffer',
      }
    )

    upsertImageToWebhook({
      request,
      serverGuid: guid,
      snapshot: snapshot,
      matchInfo,
      scoreboardData: formattedScoreboardData,
      image: response.data,
    })

    if (returnImage === 'true') {
      reply.type('image/png').send(response.data)
    } else {
      reply.status(200).send({ message: 'OK' })
    }
  } catch (err) {
    fastify.log.error(err)
    reply.status(500).send({ error: 'Failed to render image' })
  }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3111, host: '0.0.0.0' })
    console.log('Server listening on http://0.0.0.0:3111')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
