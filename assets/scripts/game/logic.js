'use strict'
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
// change between X and O
// const changePlayer = function () {
//   if (currentPlayer === 'X') {
//     currentPlayer = 'O'
//   } else {
//     currentPlayer = 'X'
//   }
// }
const changePlayer = function () {
  if (currentPlayer === 'X') {
    $(event.target).text('X')
    currentPlayer = 'O'
  } else {
    $(event.target).text('O')
    currentPlayer = 'X'
  }
}

// want to refactor this below
$('.box').on('click', function (event) {
  // console.log('you clicked', event.target.id)
  // replaces array index with X or O
  gameBoard.splice(event.target.id, 1, currentPlayer)
  $(event.target).off('click')
  console.log(gameBoard)
  // console.log('current player is', currentPlayer)
  checkWinner()
  console.log('checkWinner is', checkWinner())
  checkDraw()
  console.log('checkDraw is', checkDraw())
  isOver()
  console.log('isOver is', isOver())
  if (checkWinner() === true || checkDraw() === true) {
    endGame()
  }
  changePlayer()
  console.log('current player is', currentPlayer)
})

module.exports = {
  gameBoard,
  checkWinner,
  checkDraw,
  isOver,
  endGame,
  changePlayer
}
