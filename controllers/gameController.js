const {Game, Item} = require("../models")
// const sequelize = require('sequelize')
console.log('masuk routerrrr Game')
class GameController{

    static async findAllActiveGame(req, res, next){
        try {
            let data = await Game.findAll({where:{status:'Active'},
            include: [
                {
                    model: Item,
                    // attributes: [
                    //     [sequelize.fn('MAX', sequelize.col('price')), 'minPrice'],
                    //     [sequelize.fn('MIN', sequelize.col('price')), 'maxPrice']
                    // ]
                }
            ]})

            if(!data) throw {name: "NotFound"}

            res.status(200).json(data)
        } catch (error) {
           next(error)
        }
    }

    static async InActiveGame(req, res, next){
        try {
            let data = await Game.findAll({where:{status:'inActive'},
            include: [
                {
                    model: Item,
                    // attributes: [
                    //     [sequelize.fn('MAX', sequelize.col('price')), 'minPrice'],
                    //     [sequelize.fn('MIN', sequelize.col('price')), 'maxPrice']
                    // ]
                }
            ]})

            if(!data) throw {name: "NotFound"}

            res.status(200).json(data)
        } catch (error) {
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