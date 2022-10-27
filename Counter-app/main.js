//Javascript code starts here

//document.getElementById("count-element").innerText = 1090

//Start count at 0
// Set up code to identify when button is clicked 
// Code variable counter to increase count when button is clicked
// Change the count-el in the HTML to relect the new count 

//Count function code area -------------
let saveElement = document.getElementById("save-element");
let countEl = document.getElementById("count-element");
let count = 0;

function increment() {
    count = count + 1
    countEl.textContent = count
  
}

// Save Funtction ----------

function save() {
    let saveCount = count + "   -   "
    saveElement.textContent += saveCount
    countEl.textContent = 0
    count = 0
}



