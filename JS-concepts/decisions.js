//Decsions ask JS to asses whether an express or a vaiable is either true or false. Example below.

// IF ELSE STAEMENTS 

let today = 29

if (today == 31) {
    console.log("Today is the last day of Oct!")
}

else if (today > 33) {
    console.log("Count greater than 4")
}

else {
    console.log("Count is less than 31")
}


// SWITCH STATEMENTS
// Assign attributes to a particular data point to retrieve a speficif data point criteria.

let hero = "batface" 

 switch (hero) {
    case "superman":
    console.log("super strength")
    console.log("x-ray vision")
    console.log("super arm")

  case ("batman"):
    console.log("super intel")
    console.log("fighter")
    console.log("good leg")

    default:
        console.log("member of JLA")

}

// Tenary Operator 
// JS will see if two or more data point are equal not equal using the formula below.
// adding an extra "=" twells JS to check if they strictly equal by data type string vs string or number vs string

let ab = 1
let c = "1"
let result = (ab === c) ? "equal" : "inequal"

console.log(result)