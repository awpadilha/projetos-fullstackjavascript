let spaceship = prompt("Digite o nome da nave")

let charToReplace =  prompt("Qual caracter  vocÊ deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

console.log(spaceship, charToReplace, replacementChar)

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++){
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
} 

alert("O novo nome da nave é " + newSpaceship)

