'use strict'
const store = require('../store')
// in here I want to define all of my functions
const gameBoard = ['', '', '', '', '', '', '', '', '']
// check for win scenarios
const checkWinner = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
    return true
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
    return true
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
    return true
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== '') {
    return true
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
    return true
  } else {
    return false
  }
}
// check for draw scenario
const checkDraw = function () {
  if ((gameBoard[0] && gameBoard[1] && gameBoard[2] &&
    gameBoard[3] && gameBoard[4] && gameBoard[5] &&
    gameBoard[6] && gameBoard[7] && gameBoard[8] !== '') && checkWinner() === false) {
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
let currentPlayer = 'X'
store.currentPlayer = 'X'

const changePlayer = function () {
  if (store.currentPlayer === 'X') {
    $(store.playerClick.target).text('X')
    store.currentPlayer = 'O'
    $('#gameBoard-message').text("Player O's turn")
  } else {
    $(store.playerClick.target).text('O')
    store.currentPlayer = 'X'
    $('#gameBoard-message').text("Player X's turn")
  }
}

// want to refactor this below
const updateGameLogic = function () {
  // check if valid spot, alert if not valid
  console.log('hiiiii ', store.playerClick.target.id)
  if (gameBoard[store.playerClick.target.id] !== '') {
    $('#gameBoard-message').text('choose another spot')
  } else {
    // else update game board
    gameBoard.splice(store.playerClick.target.id, 1, store.currentPlayer)
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
  gameBoard,
  checkWinner,
  checkDraw,
  isOver,
  endGame,
  changePlayer,
  updateGameLogic
  // ,
  // data
}
