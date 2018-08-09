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
const endGame = function () {
  $('.box').off('click')
}
