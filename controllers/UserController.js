let { User, Post, Category } = require("../models")
const bcrypt = require('bcryptjs');
let {jwtToken} = require('../helper/jwt');
let {mailHelpers} = require("../helper/nodemailer")
// const { use } = require("../routes");
// const { OAuth2Client } = require('google-auth-library');

class UserController{
    static async register(req, res, next){
        try {
            let {username, email, password, referalCode} = req.body
            let message = `Hi,${username}

        Selamat datang di perusahaan kami! Kami sangat senang dapat memiliki Anda sebagai salah satu pelanggan kami yang berharga. Kami spesialis dalam melayani top up untuk game-game online, dan kami berkomitmen untuk memberikan layanan terbaik yang mungkin. Kami selalu siap untuk membantu Anda dengan pertanyaan atau kekhawatiran apapun yang mungkin Anda miliki selama proses top up.
        
        Tujuan kami adalah untuk membuat pengalaman top up Anda secepat, mudah dan aman sebagaimana mungkin. Kami terus mencari cara untuk meningkatkan layanan kami, jadi jangan ragu untuk memberi tahu kami jika ada sesuatu yang dapat kami lakukan untuk membuat pengalaman Anda lebih baik.
        
        Kami berharap dapat membangun hubungan jangka panjang dengan Anda dan membantu Anda dalam kebutuhan top up game Anda.
        
        Salam hangat,
        Tim Bintang Top Up`

            let role;
            if(!referalCode){
                role = 'customer'
            }else if(referalCode === 'test'){
                role = 'reseller'
            }else{
                role = 'customer'
            }
            await User.create({username, email, password, role})
            
            mailHelpers(email,'Welcome TopUpers', message)
            res.status(201).json({
                message:`berhasil membuuat akun ${username}`
            })
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {

        try {
            let {email, password} = req.body
            if(!email || !password){
                throw {name: "EmailOrPasswordRequired"}
            }

            let user = await User.findOne({
                where:{email}
            })

            let comparePassword = bcrypt.compareSync(password, user.password)
            if(!comparePassword){
                throw {name: "PasswordInValid"}
            }

            let payLoad = {
                id: user.id
            }

            let access_token = jwtToken(payLoad)
            res.status(200).json({access_token, user:user.username,email:user.email, role:user.role})
        } catch (error) {
            next(error)
        }
    }


    static async googleLoginAuth (req, res, next) {
        try {
            const google_token = req.headers.google_token
            const client = new OAuth2Client(process.env.CLIENT_TOKEN)
            const access = await client.verifyIdToken({
              idToken: google_token,
              audience: process.env.CLIENT_TOKEN,
            });

            const payload = access.getPayload();
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(process.env.DEFAULT_PASSWORD, salt)
            const [user] = await User.findOrCreate({
              where: { email: payload.email },
              defaults: {
                email: payload.email,
                username: payload.name,
                password: hash,
                role: 'customer'
              },
              hooks: false
            });

            const access_token = jwtToken({ id: user.id })

            res.status(200).json({ 
                access_token,user:payload.name,role:'customer'
            })
          } catch (error) {
            next(error)
          }
    }
 

}

module.exports = {UserController}