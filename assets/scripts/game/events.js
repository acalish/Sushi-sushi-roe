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
  console.log('this is event', event)
  store.playerClick = event
  event.preventDefault()
  api.update(event)
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}

const addHandlers = function () {
  $('.box').on('click', onUpdateBoard)
  $('#start-game').on('click', onStartGame)
}

module.exports = {
  addHandlers
}
