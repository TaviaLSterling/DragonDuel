import DragonController from "./app/components/DragonController.js"
import ChampionController from "./app/components/ChampionController.js"


export default class App {
    constructor() {
this.controllers = {
    dragonController: new DragonController(),
    championController: new ChampionController()
}
    }
}

window.app = new App()