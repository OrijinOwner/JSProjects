//Arrays are used to keep track of multiple data, usually in a list as a grouping. 

//Arrays start from 0 always. 0, 1, 2, 3, 4

let a = [6, 9 , 49, 90, 89];
let b = ["sarah", "John", "James"];

console.log(a[4]);
console.log(a[3]);
console.log(b[0])


//Arrays in a non-const variable can be re-assigned using the following. Selecting the array and then repurpose

a[0] = 100;
console.log(a);


//Arrays can include elements of different data types in one array 

let c = [4, "james", true];
console.log(c)

//To count how many elements within an Array use variable name followed by .length 

console.log(a.length);

//To add a new data type at the end of the array order  use push function with the data type and value you wish to add to your array.

a.push("Burgers");
console.log(a);


//Use pop element, to remove data from your array. Each tiem the pop function is used data from the END of the array will eb removed. Backwards --> frowards.

a.pop();
