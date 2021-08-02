var express = require('express')
var router = express.Router()

const { getNewOrder } = require('../controllers/index')

router.get('/', function (req, res) {
  res.render('profile/index')
})

router.get('/settings', function (req, res) {
  res.render('profile/settings')
})

router.get('/orders/new', getNewOrder)

router.get('/orders', function (req, res) {
  res.render('profile/orders/index')
})

router.get('/products/new', function (req, res) {
  res.render('profile/products/new')
})

router.get('/products', function (req, res) {
  res.render('profile/products/index')
})

module.exports = router
