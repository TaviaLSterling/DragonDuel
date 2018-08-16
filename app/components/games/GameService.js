import Game from "../../models/Game.js"

let games = {}

const gamesApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/games/',
    timeout: 3000
})

export default class GameService {
    constructor() {

    }


    getGames(draw) {
        gamesApi.get()
            .then(res => {
                let myGames = res.data.map(rawGame => {
                    return new Game(rawGame)
                })
                draw(myGames)
            }
            )
    }

}
