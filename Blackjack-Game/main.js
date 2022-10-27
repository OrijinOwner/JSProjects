// BlackJack Code Starts

// Create two variables firstCard and secondCard
//Set value to random number between 2-11

//VARIABLES SECTION
//----------------------

let firstCard = 10;
let secondCard = 11;
let userHasBlackJack = false
let userIsAlive = true
let message = null
let sum = firstCard + secondCard;
let messageElement = document.getElementById("dealer-el");
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el")
let newGameCard = 1



// Logic of the game  
// Start Game Function


function startGame() {

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

        messageElement.textContent = message
        sumElement.textContent =  "Sum:   " + sum 
        cardsElement.textContent = "Your Cards are:  " + firstCard + "  ,  " + secondCard
            
    }
        //New Card Function 
            function newCard() {
                console.log("Drawing out new card from deck...")

                

                sum =+ newGameCard
                startGame()
            }

        

     
