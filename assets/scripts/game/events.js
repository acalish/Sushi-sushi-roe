'use strict'
const gameLogic = require('./logic.js')

const api = require('./api.js')
const ui = require('./ui.js')

const onUpdateBoard = function (event) {
  gameLogic.updateGameLogic(event)
  event.preventDefault()
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}

const onStartGame = function (event) {
  event.preventDefault()
  api.create()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const addHandlers = function () {
  $('.box').on('click', onUpdateBoard)
  $('#start-game').on('click', onStartGame)
}

module.exports = {
  addHandlers
}
