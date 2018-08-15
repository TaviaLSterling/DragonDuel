import Dragon from "../../models/Dragon.js"

let dragons = []


const dragonsApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/dragons/',
    timeout: 3000
  })

export default class DragonService {
    getDragons(draw) {
   dragonsApi.get()
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