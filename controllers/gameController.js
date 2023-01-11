const {Game, Item,sequelize} = require("../models")
// const sequelize = require('sequelize')
console.log('masuk routerrrr Game')
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

}

module.exports = {GameController}