'use strict'
const store = require('../store.js')

const updateBoardSuccess = function (response) {
  $('#gameBoard-message').text('the board has changed')
  store.game = response.game
}
const updateBoardFailure = function (response) {
  $('#gameBoard-message').text('invalid move')
}

module.exports = {
  updateBoardSuccess,
  updateBoardFailure
}
