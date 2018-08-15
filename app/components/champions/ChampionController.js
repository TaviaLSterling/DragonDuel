import ChampionService from "./ChampionService.js"

const championService = new ChampionService
let app = document.getElementById('app')

function drawChampions(data) {
    let championsElem = document.getElementById('champions')
    let template = ''
    data.forEach(champion => {
        template += 
     `
    <img src="${data.imgUrl}">
        `
     })
     championsElem.innerHTML = template
}
export default class ChampionController {
    constructor(){
        drawChampions()
    }
}