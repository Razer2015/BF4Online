import { promises as fs } from 'fs'

import dotenv from 'dotenv'
import axios from 'axios'
import Handlebars from 'handlebars'

import { createScoreboardData } from '../helpers/teamHelpers.mjs'
import {
  getMatchInformation,
  formatForScoreboardTemplate,
} from '../helpers/warsawHelpers.mjs'
import { getTemplatePath } from '../helpers/pathHelpers.mjs'

// Load environment variables from .env file
dotenv.config()

// Environment variables
const imageApiUrl = process.env.IMAGEAPI_URL

const scoreboardTemplateContent = await fs.readFile(
  getTemplatePath('scoreboard'),
  'utf-8'
)
const scoreboardTemplate = Handlebars.compile(scoreboardTemplateContent)

/**
 * Get the snapshot from Battlelog https://keeper.battlelog.com/snapshot/:guid
 * @param {string} serverGuid
 * @returns
 */
export const getServerSnapshotByGuid = async (serverGuid) => {
  const snapshot = await axios.get(
    `https://keeper.battlelog.com/snapshot/${serverGuid}`
  )
  return snapshot
}

/**
 * Create scoreboard data from the snapshot
 * @param {object} snapshot
 * @returns
 */
export const getScoreboardData = async (snapshot) => {
  const scoreboardData = createScoreboardData(snapshot)

  const matchInfo = getMatchInformation(scoreboardData)
  const formattedScoreboardData = formatForScoreboardTemplate(
    scoreboardData.result
  )

  return {
    rawScoreboardData: scoreboardData,
    matchInfo,
    scoreboardData: formattedScoreboardData,
  }
}

/**
 * Generate the scoreboard image
 * @param {object} matchInfo
 * @param {object} scoreboardData
 * @returns
 */
export async function generateScoreboardImage(matchInfo, scoreboardData) {
  const rendered = scoreboardTemplate({
    matchInfo,
    data: scoreboardData,
  })

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

  return response.data
}
