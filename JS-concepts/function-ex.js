//Function Expressions
//Function Expressions are code the you wish to run at a later date. It allows for fucntion code to be called with the time delay specified.

//Code structure of SET TIMEOUT

    setTimeout(function() {
    console.log("Rishi Sunakl PM")} 
     ,3000);


let counter = 0;

function timer() {
    setTimeout(fucntion() {
        console.log("hi  " + counter++),
        timer();

    }, 4000);

}

timer()