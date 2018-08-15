import DragonController from "./app/components/dragons/DragonController.js"
import ChampionController from "./app/components/champions/ChampionController.js"


export default class App {
    constructor() {
this.controllers = {
    dragonController: new DragonController(),
    championController: new ChampionController()
}
    }
}

window.app = new App()