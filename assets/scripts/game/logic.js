'use strict'

const gameBoard = ['', '', '', '', '', '', '', '', '']
//
let currentPlayer = 'X'
// chack for win scenarios
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
// turn off click when game is over
const endGame = function () {
  $('.box').off('click')
}
//
$('.box').on('click', function (event) {
  console.log('you clicked', event.target.id)
  // replaces array index with X
  gameBoard.splice(event.target.id, 1, currentPlayer)
  $(event.target).off('click')
  console.log(gameBoard)
  // changes players between X and O
  if (currentPlayer === 'X') {
    $(event.target).text('X')
    currentPlayer = 'O'
  } else {
    $(event.target).text('O')
    currentPlayer = 'X'
  }
  checkWinner()
  checkDraw()
  if (checkWinner() === true || checkDraw() === true) {
    endGame()
  }
  // console.log(checkWinner())
  // console.log(checkDraw())
})
