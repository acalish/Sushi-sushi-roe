'use strict'
const store = require('../store')
// in here I want to define all of my functions
// const gameBoard = ['', '', '', '', '', '', '', '', '']
// store.gameBoard = ['', '', '', '', '', '', '', '', '']
// check for win scenarios
const checkWinner = function () {
  if (store.gameBoard.cells[0] === store.gameBoard.cells[1] && store.gameBoard.cells[0] === store.gameBoard.cells[2] && store.gameBoard.cells[0] !== '') {
    return true
  } else if (store.gameBoard.cells[3] === store.gameBoard.cells[4] && store.gameBoard.cells[3] === store.gameBoard.cells[5] && store.gameBoard.cells[3] !== '') {
    return true
  } else if (store.gameBoard.cells[6] === store.gameBoard.cells[7] && store.gameBoard.cells[6] === store.gameBoard.cells[8] && store.gameBoard.cells[6] !== '') {
    return true
  } else if (store.gameBoard.cells[0] === store.gameBoard.cells[3] && store.gameBoard.cells[0] === store.gameBoard.cells[6] && store.gameBoard.cells[0] !== '') {
    return true
  } else if (store.gameBoard.cells[1] === store.gameBoard.cells[4] && store.gameBoard.cells[1] === store.gameBoard.cells[7] && store.gameBoard.cells[1] !== '') {
    return true
  } else if (store.gameBoard.cells[2] === store.gameBoard.cells[5] && store.gameBoard.cells[2] === store.gameBoard.cells[8] && store.gameBoard.cells[2] !== '') {
    return true
  } else if (store.gameBoard.cells[0] === store.gameBoard.cells[4] && store.gameBoard.cells[0] === store.gameBoard.cells[8] && store.gameBoard.cells[0] !== '') {
    return true
  } else if (store.gameBoard.cells[2] === store.gameBoard.cells[4] && store.gameBoard.cells[2] === store.gameBoard.cells[6] && store.gameBoard.cells[2] !== '') {
    return true
  } else {
    return false
  }
}
// check for draw scenario
const checkDraw = function () {
  if ((store.gameBoard.cells[0] && store.gameBoard.cells[1] && store.gameBoard.cells[2] &&
    store.gameBoard.cells[3] && store.gameBoard.cells[4] && store.gameBoard.cells[5] &&
    store.gameBoard.cells[6] && store.gameBoard.cells[7] && store.gameBoard.cells[8] !== '') && checkWinner() === false) {
    return true
  } else {
    return false
  }
}
// check for if game is over
const isOver = function () {
  if (checkWinner() === true || checkDraw() === true) {
    return true
  } else {
    return false
  }
}
// turn off clicks when game is over
const endGame = function () {
  $('.box').off('click')
}
// start with first player as X
// let currentPlayer = 'X'
// saves the currentPlayer to call in other files
store.currentPlayer = 'X'

const changePlayer = function () {
  if (store.currentPlayer === 'X') {
    $(store.playerClick.target).text('X')
    store.currentPlayer = 'O'
    $('#gameBoard-message').text(store.currentPlayer + "'s turn")
  } else {
    $(store.playerClick.target).text('O')
    store.currentPlayer = 'X'
    $('#gameBoard-message').text(store.currentPlayer + "'s turn")
  }
}

// want to refactor this below
const updateGameLogic = function () {
  // check if valid spot, alert if not valid
  console.log('store.gameBoard', store.gameBoard.cells)
  console.log('store.playerclick', store.playerClick.target.id)
  console.log('this is the spot', store.gameBoard.cells[store.playerClick.target.id])
  if (store.gameBoard.cells[store.playerClick.target.id] !== '') {
    $('#gameBoard-message').text('choose another spot')
  } else {
    // else update game board
    store.gameBoard.cells.splice(store.playerClick.target.id, 1, store.currentPlayer)
    // check for a winner
    if (checkWinner() === true) {
      $('#gameBoard-message').text(store.currentPlayer + ' wins!')
      // still add token
      $(store.playerClick.target).text(store.currentPlayer)
      // display a winner visually
      endGame()
      // changePlayer()
    } else {
      changePlayer()
      checkDraw()
      // display a tie game visually
      if (checkDraw() === true) {
        $('#gameBoard-message').text('Tie game!')
      }
      isOver()
      if (checkWinner() === true || checkDraw() === true) {
        endGame()
      }
    }
  }
}

module.exports = {
  checkWinner,
  checkDraw,
  isOver,
  endGame,
  changePlayer,
  updateGameLogic
}
