// BlackJack Code Starts

// Create two variables firstCard and secondCard
//Set value to random number between 2-11

//VARIABLES SECTION
//----------------------

let firstCard = 100;
let secondCard = 11;
let userHasBlackJack = false
let userIsAlive = true
let message = null
let sum = firstCard + secondCard;

console.log(sum)

// Logic of the game

if (sum < 21) {
    message=("Draw a new card? 😊")
    }
    
    else if (sum === 21) {
      message=("You've got Blackjack! 🥳")
      userHasBlackJack = true
    }

    else if (sum > 21) {
        message=("You've lost! You're out the game. 😢")
        userIsAlive = false
    }

    console.log(message)
    