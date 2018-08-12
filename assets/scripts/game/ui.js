'use strict'
const store = require('../store.js')

const updateBoardSuccess = function () {
  $('#gameBoard-message').text('the board has changed')
}
const updateBoardFailure = function () {
  $('#gameBoard-message').text('invalid move')
}

module.exports = {
  updateBoardSuccess,
  updateBoardFailure
}
