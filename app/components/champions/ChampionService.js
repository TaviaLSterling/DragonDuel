import Champion from "../../models/Champion.js"

let champions = {}

export default class ChampionService {
    getChampions(draw) {
    fetch('https://dragon-duel.herokuapp.com/api/champions')
    .then(res => res.json())
    .then(res => {
        let myChampions = res.results.map(rawChampion => {
            let champion = new Champion(rawChampion)
            champions[champion.id] = champion
            return champion
        })
        draw(myChampions)
    })

}
}