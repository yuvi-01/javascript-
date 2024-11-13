// Primitive Datatypes
// 7 types: String , Number , Boolean , null,undefined , Symbol , BigInt 

// JS is Dynamically Typed Language \\

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3453453563454366n


// Refrence (Non Primitive)
// Array , Objects ,Functions

const heros = ["spiderman", "superman", "venom"] //array 

let myObj = {
    name: "UV",    // objects comes under curly braces
    age: 23,

}


const myFunction = function (){
    console.log("HEY THERE");       //function
    
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof anotherId);



