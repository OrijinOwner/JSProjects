//Javascript code starts here

//document.getElementById("count-element").innerText = 1090

//Start count at 0
// Set up code to identify when button is clicked 
// Code variable counter to increase count when button is clicked
// Change the count-el in the HTML to relect the new count 


let countEl = document.getElementById("count-element");

console.log(countEl);

let count = 0;

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

