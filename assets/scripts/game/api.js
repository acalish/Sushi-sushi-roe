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

// index - GET all games associated with a user (READ)

module.exports = {
  create
}
