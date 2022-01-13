function speedUp(velocity, acceleration, unit = "km/s")  {
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity + unit)
}

speedUp(100, 50)
speedUp(200, 20)
speedUp(80, 1)