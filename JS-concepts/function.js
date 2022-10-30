//All about Functions
//Function is a block of data that we can assign a name 

//FUNCTION DELCARATION - Example container

function sayHello() { 
    console.log("My name is Ivan")
    console.log("............")
    console.log("What's your name?")
}

//To Call a function created earlier - use following

sayHello();

//Assign a function to a variable structure / Only use () on the variable to call the function
let a = sayHello;
a();
a();
a();


//Add a variable or new data point to a fucntion strucutre - here we added new data point "name" which new data will be added on to.
function sayHello(name) { 
    console.log("My name is Ivan")
    console.log("What's your name?")
    console.log("My name is  " + name + ", that's right!")
}


sayHello("William");
sayHello("Bob");
sayHello("Richard");


//Return Values from Functions 

function calculateTotalTax() {
    let result = amount * 0.25;
    return result;
}


let tax = calculateTotalTax(902)
console.log(tax)
