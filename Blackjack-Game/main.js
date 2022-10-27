// BlackJack Code Starts

// Create two variables firstCard and secondCard
//Set value to random number between 2-11

let firstCard = 10;
let secondCard = 11;


// Create a variable sum, and set it to the sum of the two cards

let sum = firstCard + secondCard;

console.log(sum)

// Logic of the game

if (sum < 21) {
    console.log("Draw a new card? 😊")
    }
    
    else if (sum === 21) {
      console.log("You've got Blackjack! 🥳")
    }

    else if (sum > 21) {
        console.log("You've lost! You're out the game. 😢")
    }

