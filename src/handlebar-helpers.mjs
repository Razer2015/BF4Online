import Handlebars from 'handlebars'

import {
  localizedPoints,
  getTeamInfo,
  showFooter,
} from './helpers/warsawHelpers.mjs'

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

export default Handlebars
