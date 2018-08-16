export default class Game {
    constructor(data) {
        this.id = data._id
        this.dragon = data._dragon
        this.champion = data._champion
        this.history = data.history
    }
}