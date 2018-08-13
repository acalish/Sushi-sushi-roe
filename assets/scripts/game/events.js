'use strict'
const gameLogic = require('./logic.js')

const api = require('./api.js')
const ui = require('./ui.js')

const onUpdateBoard = function (event) {
  gameLogic.updateGameLogic(event)
  event.preventDefault()
  //  const data = gameLogic.id(event.target)
  // api.signIn(data)
    .then(ui.updateBoardSuccess)
    .catch(ui.updateBoardFailure)
}

const addHandlers = function () {
  $('.box').on('click', onUpdateBoard)
}

module.exports = {
  addHandlers
}
