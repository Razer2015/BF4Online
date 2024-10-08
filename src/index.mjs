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
import { upsertToWebhook } from './discord/discordClient.mjs'
import { getAppDataPath, getTemplatePath } from './helpers/pathHelpers.mjs'
import {
  getServerSnapshotByGuid,
  getScoreboardData,
  generateScoreboardImage,
} from './battlelog/client.mjs'

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
  try {
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
  try {
    const { guid } = request.params

    const snapshotResponse = await getServerSnapshotByGuid(guid)

    // If status is not 200, return the error
    if (snapshotResponse.status !== 200) {
      return reply.status(snapshotResponse.status).send(snapshotResponse.data)
    }

    const snapshot = snapshotResponse.data.snapshot
    const { matchInfo, scoreboardData } = await getScoreboardData(snapshot)
    const image = await generateScoreboardImage(matchInfo, scoreboardData)

    reply.type('image/png').send(image)
  } catch (err) {
    fastify.log.error(err)
    reply.status(500).send({ error: 'Failed to post data' })
  }
})

fastify.post('/server/:guid/discord/:dataType', async (request, reply) => {
  try {
    const { guid, dataType } = request.params

    const snapshotResponse = await getServerSnapshotByGuid(guid)

    // If status is not 200, return the error
    if (snapshotResponse.status !== 200) {
      return reply.status(snapshotResponse.status).send(snapshotResponse.data)
    }

    const snapshot = snapshotResponse.data.snapshot
    const { matchInfo, scoreboardData } = await getScoreboardData(snapshot)

    upsertToWebhook({
      request,
      serverGuid: guid,
      snapshot: snapshot,
      matchInfo,
      scoreboardData: scoreboardData,
      dataType,
    })

    reply.status(200).send({ message: 'OK' })
  } catch (err) {
    fastify.log.error(err)
    reply.status(500).send({ error: 'Failed to post data' })
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
