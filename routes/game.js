const express = require('express')
const router = express.Router()
const {GameController} = require("../controllers/gameController")

router.get('/', GameController.findAllActiveGame)
router.get('/top-game', GameController.getPopulerGame)
router.get('/comming-soon', GameController.InActiveGame)
router.get('/:id',GameController.gameDetail)

module.exports = router