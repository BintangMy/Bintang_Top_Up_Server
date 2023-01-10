const {Game, Item} = require("../models")
const sequelize = require('sequelize')
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
            console.log(data,'jjjjjjjj')
            res.status(200).json(data)

        } catch (error) {
            console.log(error,'hhhhhhhhhhh')
            res.status(404).json({ message: "Data not found" })
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
            res.status(201).json(data)
        } catch (error) {
            console.log(error,'llllllllllllllllllll')
            res.status(404).json({ message: "Data not found" })
        }
    }

}

module.exports = {GameController}