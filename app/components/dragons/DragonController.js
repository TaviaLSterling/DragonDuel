import DragonService from "./DragonService.js"

const dragonService = new DragonService
let app = document.getElementById('app')

function drawDragons(data) {
    let dragonsElem = document.getElementById('dragons')
    let template = ''
    data.forEach(dragon => {
        template += 
     `
     <div class="col-sm-2.4">
    <img src="${dragon.imgUrl}">
    <h3>${dragon.name}</h3>
    <h3>HP: ${dragon.maxHP}</h3>
    </div>
        `
     })
     dragonsElem.innerHTML = template
} 
export default class DragonController {
    constructor(){
        //drawDragons()
        dragonService.getDragons(drawDragons)
    }
   // getDragons() {
  //      dragonService.getDragons(drawDragons())
//    }
}
