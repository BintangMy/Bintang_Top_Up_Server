const express = require('express')
const router = express.Router()
const {cekIdGameController} = require("../controllers/cekIdGameController")

router.post('/freefire', cekIdGameController.freefire)
router.post('/genshinImpact', cekIdGameController.genshinImpact)
router.post('/mobilelegends', cekIdGameController.mobileLegends)
router.post('/cod', cekIdGameController.cod)
router.post('/aov', cekIdGameController.aov)
router.post('/dominohight', cekIdGameController.domino)


module.exports = router