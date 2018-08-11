'use strict'
const store = require('../store.js')

const signUpSuccess = function () {
  $('#message').text('Sign up success!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
}
const signUpFailure = function () {
  $('#message').text('Sign up failed, please check that your passwords match.')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-up input').val('')
}

const signInSuccess = function (response) {
  console.log('Response is', response)
  $('#message').text('Welcome back!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
  $('#change-password').show()
  $('#sign-out').show()
  $('#make-example').show()
  $('#get-examples').show()
  $('#get-example').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  store.user = response.user
  console.log('store', store)
}

const signInFailure = function () {
  $('#message').text('Sign in failed, check that your email and password are correct')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
}

const changePasswordSuccess = function () {
  $('#message').text('Password changed')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password input').val('')
}

const changePasswordFailure = function () {
  $('#message').text('Password not changed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#change-password input').val('')
}

const signOutSuccess = function () {
  $('#message').text('Sign out successful')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out input').val('')
}

const signOutFailure = function () {
  $('#message').text('Not possible')
  $('#message').removeClass()
  $('#message').addClass('fail')
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
