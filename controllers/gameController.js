const {Game, Item,sequelize} = require("../models")
let axios = require('axios')


class GameController{

    static async getPopulerGame(req, res, next){
        try {
        
        let data = await sequelize.query(`select g.*, MAX(i.price), MIN(i.price) from "Games" g 
        join "Items" i ON g.id = i."gameId"
        group by g.id
        order by g.id
        limit 5`)
            data = data[0]
            res.status(200).json(data)
        } catch (error) {
           next(error)
        }
    }

    static async findAllActiveGame(req, res, next){
        try {
        
        let data = await sequelize.query(`select g.*, MAX(i.price), MIN(i.price) from "Games" g 
        join "Items" i ON g.id = i."gameId"
        group by g.id order by g.id`)
            data = data[0]
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
           next(error)
        }
    }

    static async InActiveGame(req, res, next){
        try {
            let data = await Game.findAll({where:{status:'inActive'},
            include: [
                {
                    model: Item,
                }
            ]
        })

            if(!data) throw {name: "NotFound"}

            res.status(200).json(data)
        } catch (error) {
            // console.log(error) 
            next(error)
        }
    }
    static async gameDetail(req, res, next){
        try {
            let {id} = req.params
            let data = await Game.findOne({
                where:{
                    id
                },
                include:[Item]
            })
            if(!data) throw {name: "NotFound"}

            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async qrCode(req,res, next){
        try {
            let {link} = req.body

            console.log(link,'ini link api keyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
            const { data } = await axios({
                method: 'POST',
                url: 'https://qrcode3.p.rapidapi.com/qrcode/text',
                headers: {
                  'content-type': 'application/json',
                  'X-RapidAPI-Key': process.env.RAPID_API_QRCODE,
                  'X-RapidAPI-Host': process.env.RAPID_API_QRCODE_HOST
                },
                data: `{"data":"${link}","image":{"uri":"icon://appstore","modules":true},"style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4,"error_correction":"M"},"output":{"filename":"qrcode","format":"png"}}`
            })
              res.status(200).json(data)
        } catch (error) {
            console.log(error, 'ini errrrrrr qrrrrr')
            next(error)
        }
    }

}

module.exports = {GameController}