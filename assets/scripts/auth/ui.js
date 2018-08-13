'use strict'
const store = require('../store.js')

const signUpSuccess = function () {
  $('#auth-message').text('Sign up successful, please sign in to play')
  $('#sign-up input').val('')
}
const signUpFailure = function () {
  $('#auth-message').text('Sign up failed, please check that your passwords match')
  $('#sign-up input').val('')
}

const signInSuccess = function (response) {
  console.log('Response is', response)
  $('#auth-message').text('Enjoy your game!')
  $('#sign-in input').val('')
  // $('#game').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#start-game').removeClass('hidden')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.story').hide()
  store.user = response.user
}

const signInFailure = function () {
  $('#auth-message').text('Sign in failed, check that your email and password are correct')
  $('#sign-in input').val('')
}

const changePasswordSuccess = function () {
  $('#auth-message').text('Password changed')
  $('#change-password input').val('')
}

const changePasswordFailure = function () {
  $('#auth-message').text('Password not changed')
  $('#change-password input').val('')
}

const signOutSuccess = function () {
  $('#auth-message').text('Sign out successful')
  $('#sign-out input').val('')
}

const signOutFailure = function () {
  $('#auth-message').text('Sign out failed')
  $('#sign-out input').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
