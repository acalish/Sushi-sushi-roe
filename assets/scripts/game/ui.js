'use strict'
const store = require('../store.js')
const gameLogic = require('./logic.js')

const startGameSuccess = function (response) {
  $('#game').removeClass('hidden')
  $('#gameBoard-message').removeClass('hidden')
  $('#game-stats').removeClass('hidden')
  $('#game-stats-message').removeClass('hidden')
  $('#start-game').addClass('hidden')
  store.currentPlayer = '🍣'
  store.gameBoard = response.game
  // need to start with the gameOver as false
  store.gameOver = false
}
const startGameFailure = function (response) {
  // console.log(response)
}

const newGameSuccess = function (response) {
  // need to say that the game is not over
  store.gameOver = false
  store.gameBoard = response.game
  $('.box').empty()
  $('#gameBoard-message').text("🍣's turn")
  store.currentPlayer = '🍣'
  $('#game-stats-message').text('')
}

const updateBoardSuccess = function (response) {
  // saves the succesful AJAX call array
  // store.newArray = response.game.cells
  // console.log('this is the new array', store.newArray)
  $('#new-game').removeClass('hidden')
  if (store.gameOver === false) {
    gameLogic.updateGameLogic()
  }
}

const updateBoardFailure = function (response) {
//  console.log('failure')
}

const getGamesSuccess = function (response) {
  store.gameStats = response.games.length
  $('#game-stats-message').text('Games played: ' + store.gameStats)
}

const getGamesFailure = function (response) {
//  console.log('getting games failed!')
}

module.exports = {
  updateBoardSuccess,
  updateBoardFailure,
  startGameSuccess,
  startGameFailure,
  getGamesSuccess,
  getGamesFailure,
  newGameSuccess
}
