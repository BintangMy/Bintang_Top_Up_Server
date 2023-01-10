let { User, Post, Category } = require("../models")
let {decoded} = require('../helper/jwt')

async function authentication(req, res, next) {
    try {
        let access_token = req.headers.access_token
        if(!access_token){
            throw {name: "Unauthenticated"}
        }

        let payLoad = decoded(access_token)
        let user = await User.findByPk(payLoad.id)
        if(!access_token){
            throw {name: "Unauthenticated"}
        }

        req.user = {id: user.id, role:user.role, username: user.username, email:user.username} 
        next()
    } catch (error) {
        next(error)
    }
}

async function authorization(req, res, next){
    try {
        let blog = await Post.findByPk(req.params.id)

        if(!blog){
            throw {name: "NotFound"}
        }else{
            let authorId = blog.authorId
            let userId = req.user.id
            // console.log(req.user,'llllllll')

            if(req.user.role === 'Admin'){
                next()
            }else if(req.user.role === 'Staff'){
                if(authorId == userId){
                    next()
                }else{
                    throw {name: "Forbidden"}
                }
            }else{
                throw {name: "NotFound"}
            }
        }
    } catch (error) {
        next(error)
    }
    
}

async function authForEditStatus(req, res, next){
    try {
        // console.log(req.params)
        let blog = await Post.findByPk(req.params.id)

        if(!blog){
            throw {name: "NotFound"}
        }else{
            if(req.user.role === 'Admin'){
                next()
            }else if(req.user.role === 'Staff'){

                    throw {name: "Forbidden"}
            }else{
                throw {name: "NotFound"}
            }

            
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { authentication, authorization, authForEditStatus}