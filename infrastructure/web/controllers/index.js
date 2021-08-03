const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')

const { addUser, addOrder } = require('../../../use-cases/index')

const makeGetSignUp = require('./get-signup')
const makePostUser = require('./post-signup')
const makeGetNewOrder = require('./get-new-order')
const makePostNewOrder = require('./post-new-order')

const getSignUp = makeGetSignUp()
const postSignup = makePostUser({ addUser, flashMessages, sanitize, validator })
const getNewOrder = makeGetNewOrder()
const postNewOrder = makePostNewOrder({ addOrder, flashMessages, sanitize })

module.exports = {
  getSignUp,
  getNewOrder,
  postSignup,
  postNewOrder,
}
