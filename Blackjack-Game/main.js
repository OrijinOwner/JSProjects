// BlackJack Code Starts

// Create two variables firstCard and secondCard
//Set value to random number between 2-11

//VARIABLES SECTION
//----------------------

let firstCard = 3;
let secondCard = 8;
let cards = [firstCard, secondCard]
let userHasBlackJack = false
let userIsAlive = true
let message = null
let sum = firstCard + secondCard;
let messageElement = document.getElementById("dealer-el");
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el")





// Logic of the game  
// Start Game Function


function renderGame() {

        for (let i = 0; i < cards.length; i++) {
            cardsElement.textContent += cards[i]
        }


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
        cardsElement.textContent = "Your Cards are:  " + cardArray[0] + "  ,  " + cardArray[1]


         
            
       
    }
        //New Card Function 
            function newCard() {
    

                let card = 6
                sum += card
                renderGame()
                

            }

        //startGame Fucntion

            function startGame() {
               renderGame()

            }

            let cardArray = [
                firstCard,
                secondCard, 
                cards.push(newCard)
            ]
 
            

            
        
