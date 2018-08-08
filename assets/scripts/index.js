'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  const gameBoard = ['', '', '', '', '', '', '', '', '']
  let currentPlayer = 'X'
  $('.box').on('click', function (event) {
    console.log('you clicked', event.target.id)
    // replaces array index with X
    gameBoard.splice(event.target.id, 1, currentPlayer)
    console.log(gameBoard)
    // changes players between X and O
    if (currentPlayer === 'X') {
      $(event.target).text('X')
      currentPlayer = 'O'
    } else {
      $(event.target).text('O')
      currentPlayer = 'X'
    }
  })
})
