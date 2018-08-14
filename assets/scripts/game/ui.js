'use strict'
const store = require('../store.js')
const gameLogic = require('./logic.js')
// const gameEvents = require('./events.js')

const startGameSuccess = function (response) {
  $('#game').removeClass('hidden')
  $('#gameBoard-message').removeClass('hidden')
  $('#game-stats').removeClass('hidden')
  $('#game-stats-message').removeClass('hidden')
  store.currentPlayer = 'X'
  store.gameBoard = response.game
  console.log('created board', response.game)
  // console.log(response)
}
const startGameFailure = function (response) {
  // console.log(response)
}

const newGameSuccess = function (response) {
  console.log('give me a new game!')
  store.gameBoard = response.game
  $('.box').empty()
  $('#gameBoard-message').text("Player X's turn")
  store.currentPlayer = 'X'
}

const updateBoardSuccess = function (response) {
  // saves the succesful AJAX call array
  // store.newArray = response.game.cells
  // console.log('this is the new array', store.newArray)
  gameLogic.updateGameLogic()
  // console.log('this is response', response)
  $('#new-game').removeClass('hidden')
}

const updateBoardFailure = function (response) {
  console.log('failure')
}

const getGamesSuccess = function (response) {
  store.gameStats = response.games.length
  // console.log('number = ', store.gameStats)
  $('#game-stats-message').text('Games played: ' + store.gameStats)
  // console.log('getting games succeeded!')
  // console.log('this is the response ', response)
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
  getGamesFailure,
  newGameSuccess
}
