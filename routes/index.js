const express = require('express')
const router = express.Router()
let { authentication} = require("../middlewares/auth")

const game = require('./game')
const user = require('./user')
const payment = require('./payment')
const cekId = require('./cekId')

router.use('/',user)
router.use('/game',game)
router.use('/cekid',cekId)
router.use(authentication)
router.use('/payment', payment)

module.exports = router