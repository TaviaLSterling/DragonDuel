import DragonService from "./DragonService.js"

const dragonService = new DragonService
let app = document.getElementById('app')

function drawDragons(data) {
    let dragonsElem = document.getElementById('dragons')
    let template = ''
    data.forEach(dragon => {
        template += 
     `
    <img src="${dragon.imgUrl}">
        `
     })
     dragonsElem.innerHTML = template
} 
export default class ChampionController {
    constructor(){
        drawDragons()
    }
    getChampions() {
        dragonService.getDragons(drawDragons())
    }
}
