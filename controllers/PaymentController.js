let { User, Payment, Item, Game } = require('../models')
const midtransClient = require('midtrans-client');
let {mailHelpers} = require("../helper/nodemailer")

class PaymentController {
    static async getPaymentToken(req, res, next) {
        try {
            let {email, username} = req.user

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
                    "first_name": username,
                    "email": email
                }
            }

            let token  = await snap.createTransaction(parameter)

            await Payment.create({userId:req.user.id, itemId:1, orderId:order_id, isPayment:false})

            // let data = {token, orderId:order_id}

            // console.log(data,'ini datanya')
                res.status(200).json({token, orderId:order_id})
        } catch (error) {
            next(error)
        }
    }

    static async statusPayment(req, res, next) {
        try {

            let {email, username} = req.user

            let message = `Hi ${username},

            Kami ingin mengucapkan terimakasih! Pembayaran top up Anda telah berhasil kami terima. Kami senang dapat menyediakan layanan top up yang cepat dan aman bagi Anda.
            
            Sebagai bentuk apresiasi kami atas kepercayaan Anda, kami ingin memberikan tawaran eksklusif kepada Anda. Kami memberikan bonus tambahan sebesar 20% dari jumlah top up yang Anda lakukan. Untuk menikmati bonus ini, gunakan kode promo "TOPUPBONUS" saat melakukan top up selanjutnya dalam jangka waktu 1 minggu ini.
            
            Kami berharap Anda dapat menikmati bonus tambahan ini dan terus menggunakan layanan kami. Terima kasih atas kepercayaan Anda dan kami berharap dapat melayani Anda kembali dalam waktu dekat.
            
            Salam,
            Tim Bintang Top Up`
            let {orderId} = req.body            
            await Payment.update({isPayment:true},{where:{orderId:orderId}})

            mailHelpers(email,'Payment Success', message)

            res.status(200).json({message:'berhasil membayar dari server'})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = { PaymentController }