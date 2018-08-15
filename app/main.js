import ChampionController from "./components/champions/ChampionController.js"
import DragonController from "./components/dragons/DragonController.js"


export default class App {
    constructor() {
this.controllers = {
    dragonController: new DragonController(),
    championController: new ChampionController()
}
    }
}
const app = new App()
window.app = app