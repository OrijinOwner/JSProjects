// Check if the person is old enought o enter the club
// Log a suitable reposne for either result

// IF ELSE STATEMENTS: First Example

let age = 21;

if (age < 21) {
    console.log("Sorry, you are too young and cannot enter! 😢")
}

else if (age > 21) {
    console.log("Welcome, the bar is on the left! 😊")
}

else if (age === 21) {
    console.log("Welcome, the bar is on the left! And happy birthday 😊")
}

// IF ELSE STATEMENTS: Second Example

// Check if a person if eligible for a card from the king (100yrs)
// If the age is less than 100 - not eligible 
// If 100 you are eligible 

let personAge = 103;

if (personAge > 100) {
    console.log("You have already recieved a card!")
}

else if (personAge < 100) {
    console.log("You're not eligible yet.")
}

else if (personAge === 100) {
    console.log("Happy Birthday, you card will be sent shortly.")
}
// If older than 100 you are not eligible, as you had one 

let firstCard = 61;
let secondCard = 11;
let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw a new card?")
}

else if (sum === 21) {
    console.log("Congrats! You've got a Blackjack!?")
}

else if (sum > 21) {
    console.log("You're out of the game!")
}
