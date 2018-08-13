'use strict'
const store = require('../store.js')

const updateBoardSuccess = function (response) {
  console.log('success')
}

const updateBoardFailure = function (response) {
  console.log('failure')
}

const startGameSuccess = function (response) {
  $('#game').removeClass('hidden')
  console.log(response)
}
const startGameFailure = function (response) {
  console.log(response)
}

module.exports = {
  updateBoardSuccess,
  updateBoardFailure,
  startGameSuccess,
  startGameFailure
}
