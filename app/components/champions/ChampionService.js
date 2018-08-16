import Champion from "../../models/Champion.js"

let champions = {}

const championsApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/champions/',
    timeout: 3000
})

export default class ChampionService {
    constructor(){

    }


        getChampions(draw) {
            championsApi.get()
                .then(res => {
                    let myChampions = res.data.map(rawChampion => {
                        return new Champion(rawChampion)
                    })
                    draw(myChampions)
                }
                )
        }
  //  .then(res => res.json())
  //  .then(res => {
    //    let myChampions = res.results.map(rawChampion => {
     //       let champion = new Champion(rawChampion)
       //     champions[champion.id] = champion
        //    return champion
      //  })
      //  draw(myChampions)
   // })

}
//}