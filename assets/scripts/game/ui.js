'use strict'
const store = require('../store.js')

const startGameSuccess = function (response) {
  $('#game').removeClass('hidden')
  $('#gameBoard-message').removeClass('hidden')
  console.log(response)
}
const startGameFailure = function (response) {
  console.log(response)
}

const updateBoardSuccess = function (response) {
  console.log('success')
}

const updateBoardFailure = function (response) {
  console.log('failure')
}

module.exports = {
  updateBoardSuccess,
  updateBoardFailure,
  startGameSuccess,
  startGameFailure
}
