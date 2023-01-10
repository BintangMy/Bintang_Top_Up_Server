let axios = require('axios')

class cekIdGmeController {
    static async freefire(req, res, next){
        try {
            let {id} = req.body

            let {data} = await axios({
                method: 'GET',
                url: 'https://check-id-game.p.rapidapi.com/api/rapid_api/cek_game_ff/' + id,
                headers: {
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.RAPID_API_HOST
                }
            })
            mailHelpers()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async genshinImpact(req, res, next){
        try {
            let {id, region} = req.body
            let {data} = await axios({
                method: 'GET',
                url: 'https://check-id-game.p.rapidapi.com/api/rapid_api/test_game_genshin/' + `${id}/${region}`,
                headers: {
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.RAPID_API_HOST
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async mobileLegends(req, res, next){
        try {
            let {id, region} = req.body
            let {data} = await axios({
                method: 'GET',
                url: 'https://check-id-game.p.rapidapi.com/api/rapid_api/cek_game_ml/' +  `${id}/${region}`,
                headers: {
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.RAPID_API_HOST
                }
            })

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async cod(req, res, next){
        try {

            let {id} = req.body
            let {data} = await axios({
                method: 'GET',
                url: 'https://check-id-game.p.rapidapi.com/api/rapid_api/cek_game_cod/' + id,
                headers: {
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.RAPID_API_HOST
                }
            })

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async aov(req, res, next){
        try {
            let {id} = req.body
            console.log(req.body, 'ini bpdyyyyyyyyyyyyyyyyyyyy')
            let {data} = await axios({
                method: 'GET',
                url: 'https://check-id-game.p.rapidapi.com/api/rapid_api/cek_game_aov/' + id,
                headers: {
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.RAPID_API_HOST
                }
            })

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async domino(req, res, next){
        try {
            let {id} = req.body
            // console.log(req.body, 'ini bpdyyyyyyyyyyyyyyyyyyyy')  
            let {data} = await axios({
                method: 'GET',
                url: 'https://check-id-game.p.rapidapi.com/api/rapid_api/cek_game_domino/' + id,
                headers: {
                    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.RAPID_API_HOST
                }
            })

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {cekIdGmeController}