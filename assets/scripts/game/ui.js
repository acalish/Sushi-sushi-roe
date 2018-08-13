'use strict'
const store = require('../store.js')

const updateBoardSuccess = function (response) {
  console.log('success')
}

const updateBoardFailure = function (response) {
  console.log('failure')
}

module.exports = {
  updateBoardSuccess,
  updateBoardFailure
}
