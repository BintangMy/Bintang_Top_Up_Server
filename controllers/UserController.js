let { User, Post, Category } = require("../models")
const bcrypt = require('bcryptjs');
let {jwtToken} = require('../helper/jwt');
// const { use } = require("../routes");
// const { OAuth2Client } = require('google-auth-library');

class UserController{
    static async register(req, res, next){
        
        try {
            let {username, email, password, referalCode} = req.body
            let role;
            if(!referalCode){
                role = 'customer'
            }else if(referalCode === 'test'){
                role = 'reseller'
            }else{
                role = 'customer'
            }
            await User.create({username, email, password, role})
            res.status(201).json({
                message:`succsess create account ${username}`
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


    static async paymentStatus(req, res, next) {
        try {
            await User.update({isPatment:true}, {where:{
                id:req.user.id
            }})

            res.status(200).json(`success payment`)
        } catch (error) {
            next(error)
        }
    }

    // static async googleLoginAuth (req, res, next) {
    //     try {
    //         const google_token = req.headers.google_token
    //         const client = new OAuth2Client(process.env.CLIENT_TOKEN)
    //         const access = await client.verifyIdToken({
    //           idToken: google_token,
    //           audience: process.env.CLIENT_TOKEN,
    //         });

    //         const payload = access.getPayload();
    //         const salt = bcrypt.genSaltSync(10);
    //         const hash = bcrypt.hashSync(process.env.DEFAULT_PASSWORD, salt)
    //         const [user] = await User.findOrCreate({
    //           where: { email: payload.email },
    //           defaults: {
    //             email: payload.email,
    //             username: payload.name,
    //             password: hash,
    //             role: 'Staff'
    //           },
    //           hooks: false
    //         });

    //         const access_token = jwtToken({ id: user.id })

    //         res.status(200).json({ 
    //             access_token,user:payload.name,role:'Staff'
    //         })
    //       } catch (error) {
    //         next(error)
    //       }
    // }
 

}

module.exports = {UserController}