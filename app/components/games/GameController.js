import GameService from "./GameService.js"

const gameService = new GameService
let app = document.getElementById('app')

function drawGames(data) {
    let gamesElem = document.getElementById('game')
    let template = ''
    data.forEach(game => {
        template += 
     `
     <div class="col-sm-6">
    <h3>${game.dragon}</h3>
    <h3>HP: ${game.champion}</h3>
    </div>
        `
     })
     gamesElem.innerHTML = template
}
export default class GameController {
    constructor(){
      gameService.getGames(drawGames)
    }
}