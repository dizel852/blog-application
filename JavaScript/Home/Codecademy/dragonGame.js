slaying = true;
youHit = Math.floor(Math.random() * 2);
damageThisRound = Math.floor(Math.random()*5 + 1)
totalDamage = 0;

while(slaying) {
     slaying = false
    if (youHit){
        console.log("Great! You hit the dragon!")
        totalDamage = totalDamage += damageThisRound
        if (totalDamage >= 4) {
            console.log("You have slew the dragon!")
            slaying = false
            } else {
                youHit = Math.floor(Math.random() * 2);
                }
        } else {
            console.log("The Dragon defeated you!")
            }
    }