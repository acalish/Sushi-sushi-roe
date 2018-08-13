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

const changePlayer = function () {
  if (currentPlayer === 'X') {
    $(event.target).text('X')
    currentPlayer = 'O'
    $('#gameBoard-message').text("Player O's turn")
  } else {
    $(event.target).text('O')
    currentPlayer = 'X'
    $('#gameBoard-message').text("Player X's turn")
  }
}

// want to refactor this below
const updateGameLogic = function (event) {
  // check if valid spot, alert if not valid
  if (gameBoard[event.target.id] !== '') {
    $('#gameBoard-message').text('choose another spot')
  } else {
    // else update game board
    gameBoard.splice(event.target.id, 1, currentPlayer)
    console.log(gameBoard)
    // check for a winner
    if (checkWinner() === true) {
      $('#gameBoard-message').text(currentPlayer + ' wins!')
      // still add token
      $(event.target).text(currentPlayer)
      console.log(currentPlayer + ' wins')
      // display a winner visually
      endGame()
      // changePlayer()
    } else {
      changePlayer()
      console.log('checkWinner is', checkWinner())
      checkDraw()
      // display a tie game visually
      if (checkDraw() === true) {
        $('#gameBoard-message').text('Tie game!')
      }
      console.log('checkDraw is', checkDraw())
      isOver()
      console.log('isOver is', isOver())
      if (checkWinner() === true || checkDraw() === true) {
        endGame()
      }
      console.log('current player is', currentPlayer)
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
}
