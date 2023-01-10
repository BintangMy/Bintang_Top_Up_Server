let { User, Payment, Item, Game } = require('../models')
const midtransClient = require('midtrans-client');

class PaymentController {
    static async getPaymentToken(req, res, next) {
        try {
            let {price} = req.body
            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: process.env.MIDTRANS_SERVER_KEY
            });

            let order_id = new Date().getTime()

            let parameter = {
                "transaction_details": {
                    "order_id": `YOUR-ORDERID-${order_id}`,
                    "gross_amount": price
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "first_name": "owner",
                    "email": "bintangtopup@gmail.com"
                }
            }

            let token  = await snap.createTransaction(parameter)

            await Payment.create({userId:req.user.id, itemId:1, orderId:order_id, isPayment:false})
                console.log(token)
                res.status(200).json({token, orderId:order_id})
        } catch (error) {
            console.log(error, 'paymentttt')
            next()
        }
    }

    static async statusPayment(req, res, next) {
        try {
            let {orderId} = req.body            
            await Payment.update({isPayment:true},{where:{orderId:orderId}})
            res.status(200).json({message:'berhasil membayar dari server'})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = { PaymentController }