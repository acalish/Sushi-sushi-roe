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
  // saves this event to use later
  event.preventDefault()
  store.playerClick = event
  console.log('store player click', store.playerClick)
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

const onNewGame = function (event) {
  event.preventDefault()
  api.create()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const addHandlers = function () {
  $('.box').on('click', onUpdateBoard)
  $('#start-game').on('click', onStartGame)
  $('#game-stats').on('click', onGetGames)
  $('#new-game').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
