'use strict'

const config = require('../config.js')
const store = require('../store.js')

// create - POST create a new game (CREATE)
const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

// update - PATCH update a game (UPDATE)
const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.games.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

// index - GET all games associated with a user (READ)
// const index = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + data.games.id,
//     method: 'GET',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  create,
  update
  // ,
  // index
}
