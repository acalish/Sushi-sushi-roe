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
    data: data
  })
}

// update - PATCH update a game (UPDATE)
const update = function (event) {
  // console.log('this is event target', event.target.id)
  console.log('this is store id', store.gameBoard.id)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameBoard.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': event.target.id,
          'value': store.currentPlayer
        },
        'over': false
      }
    }
  })
}

// index - GET all games associated with a user (READ)
const getGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  create,
  update,
  getGames
}
