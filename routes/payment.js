 const express = require("express")
const router = express.Router()
const {PaymentController} = require("../controllers/PaymentController")

router.post('/get-payment-token', PaymentController.getPaymentToken)
router.patch('/statusPayment', PaymentController.statusPayment)




module.exports = router