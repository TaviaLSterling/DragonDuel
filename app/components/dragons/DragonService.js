import Dragon from "../../models/Dragon.js"


let dragons = {}

const dragonsApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/dragons/',
    timeout: 3000
})

export default class DragonService {
    constructor() {

    }

    getDragons(draw) {
        dragonsApi.get()
            .then(res => {
                let myDragons = res.data.map(rawDragon => {
                    return new Dragon(rawDragon)
                })
                draw(myDragons)
            }
            )
    }
}
