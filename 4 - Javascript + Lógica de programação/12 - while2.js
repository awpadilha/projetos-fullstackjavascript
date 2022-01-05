let constellation = "Andromeda"
let pos = 0
let constellationlength = constellation.length

while(pos < constellationlength) {
    if(constellation[pos] == "a" || constellation[pos] == "A") {
        console.log(pos)
    }
    pos += 1
}