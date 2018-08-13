'use strict'
const gameLogic = require('./logic.js')
const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')

const onStartGame = function (event) {
  event.preventDefault()
  api.create()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onUpdateBoard = function (event) {
//  console.log('this is event', event)
  // saves this event to use later
  store.playerClick = event
  event.preventDefault()
  api.update(event)
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const addHandlers = function () {
  $('.box').on('click', onUpdateBoard)
  $('#start-game').on('click', onStartGame)
  $('#game-stats').on('click', onGetGames)
}

module.exports = {
  addHandlers
}
