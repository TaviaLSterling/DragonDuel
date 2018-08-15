import Dragon from "../../models/Dragon.js"

let dragons = {}

export default class DragonService {
    getDragons(draw) {
    fetch('https://dragon-duel.herokuapp.com/api/dragons')
    .then(res => res.json())
    .then(res => {
        let myDragons = res.results.map(rawDragon => {
            let dragon = new Dragon(rawDragon)
            dragons[dragon.id] = dragon
            return dragon
        })
        draw(myDragons)
    })

}
}