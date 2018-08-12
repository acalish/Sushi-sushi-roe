'use strict'
const gameLogic = require('./logic.js')

const api = require('./api.js')
const ui = require('./ui.js')

const addHandlers = function () {
// add handlers here
  // $('.box').on('click', function (event) {
  //   console.log('you clicked', event.target.id)
  //   // replaces array index with X
  //   gameLogic.gameBoard.splice(event.target.id, 1, gameLogic.currentPlayer)
  //   $(event.target).off('click')
  //   console.log(gameLogic.gameBoard)
  //   console.log('current player is', gameLogic.currentPlayer)
  //   gameLogic.checkWinner()
  //   console.log('checkWinner is', gameLogic.checkWinner())
  //   gameLogic.checkDraw()
  //   console.log('checkDraw is', gameLogic.checkDraw())
  //   gameLogic.isOver()
  //   console.log('isOver is', gameLogic.isOver())
  //   gameLogic.changePlayer()
  //   console.log('current player is', this.currentPlayer)
  // })
}

module.exports = {
  addHandlers
}
