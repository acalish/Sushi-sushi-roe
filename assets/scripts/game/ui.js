'use strict'
const store = require('../store.js')
const gameLogic = require('./logic.js')

const startGameSuccess = function (response) {
  $('#game').removeClass('hidden')
  $('#gameBoard-message').removeClass('hidden')
  store.game = response.game
  console.log(response)
}
const startGameFailure = function (response) {
  console.log(response)
}

const updateBoardSuccess = function (response) {
  // saves the succesful AJAX call array
  store.newArray = response.game.cells
  console.log('this is the new array', store.newArray)
  gameLogic.updateGameLogic()
  console.log('this is response', response)
  $('#game-stats').removeClass('hidden')
}

const updateBoardFailure = function (response) {
  console.log('failure')
}

const getGamesSuccess = function (response) {
  console.log('getting games succeeded!')
}

const getGamesFailure = function (response) {
  console.log('getting games failed!')
}

module.exports = {
  updateBoardSuccess,
  updateBoardFailure,
  startGameSuccess,
  startGameFailure,
  getGamesSuccess,
  getGamesFailure
}
