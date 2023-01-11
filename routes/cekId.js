const express = require('express')
const router = express.Router()
const {cekIdGmeController} = require("../controllers/cekIdGmeController")

router.post('/freefire', cekIdGmeController.freefire)
router.post('/genshinImpact', cekIdGmeController.genshinImpact)
router.post('/mobilelegends', cekIdGmeController.mobileLegends)
router.post('/cod', cekIdGmeController.cod)
router.post('/aov', cekIdGmeController.aov)
router.post('/dominohight', cekIdGmeController.domino)


module.exports = router