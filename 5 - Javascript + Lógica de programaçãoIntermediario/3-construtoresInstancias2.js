class Spaceship {
    constructor(name, type = "Descoberta") {
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")

console.log(darwin)
console.log(helmet)