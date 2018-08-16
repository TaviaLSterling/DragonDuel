import ChampionService from "./ChampionService.js"

const championService = new ChampionService
let app = document.getElementById('app')

function drawChampions(data) {
    let championsElem = document.getElementById('champions')
    let template = ''
    data.forEach(champion => {
        template += 
     `
     <div class="col-sm-2.4">
    <img src="${champion.imgUrl}">
    <h3>Name: ${champion.name}</h3>
    <h3>HP: ${champion.hp}</h3>
    </div>
        `
     })
     championsElem.innerHTML = template
}
export default class ChampionController {
    constructor(){
      //  drawChampions()
      championService.getChampions(drawChampions)
    }
 //   getChampions() {
        
  //  }
}