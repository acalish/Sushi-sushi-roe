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

const gameBoard = function () {
  let currentBoard = []

}

// check isWinner
const isWinner = function (currentBoard) {
  if (currentBoard === winningCombinations) {
    return true
  } else {
    return false
  }
}

// const winningCombinations = (currentBoard[0] === currentBoard[1] === currentBoard[2])
// || (currentBoard[0] === currentBoard[1] === currentBoard[2])
// || (currentBoard[3] === currentBoard[4] === currentBoard[5])
// || (currentBoard[6] === currentBoard[7] === currentBoard[8])
// || (currentBoard[0] === currentBoard[3] === currentBoard[6])
// || (currentBoard[1] === currentBoard[4] === currentBoard[7])
// || (currentBoard[0] === currentBoard[4] === currentBoard[8])
// || (currentBoard[2] === currentBoard[4] === currentBoard[6])
