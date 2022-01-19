let hitchedSpaceships = ["Deméter", "Darwin", "Supernova","Fenix", "Puller"]

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship){
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcasedSpaceships)