'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
})

// create empty board in JS

// Game Flow!
// 1. check isWinner, if yes, return winner, if no, continue
// 2. check isOver, if yes, return draw, if no continue
// 3. check currentPlayer, if playerOne push 'X' to currentBoard, if playerTwo push'O'
// 4. change player so the flow can start over again

const gameBoard = ['', '', '', '', '', '', '', '', '']

const checkWinner = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[1] === gameBoard[2] && gameBoard[1] === gameBoard[3] && gameBoard[1] !== '') {
    return true
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
    return true
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
    return true
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
    return true
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
    return true
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
    return true
  } else {
    return false
  }
}


if (
  (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') ||
  (gameBoard[1] === gameBoard[2] && gameBoard[1] === gameBoard[3] && gameBoard[1] !== '') ||
  (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') ||
  (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') ||
  (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') ||
  (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') ||
  (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') ||
  (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '')
) {
  return true
} else {
  return false
}
}
