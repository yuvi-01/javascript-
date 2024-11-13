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
    // console.log("HEY THERE");       //function
    
}
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);

// console.log(typeof heros); //array in js are object

// console.log(typeof myObj);
// console.log(typeof anotherId);




//summary of above codes
// Primitive Types:

// Number (score, scoreValue)
// Boolean (isLoggedIn)
// null (outsideTemp)
// undefined (userEmail)
// Symbol (id, anotherId)
// BigInt (bigNumber)
// Reference Types:

// Array (heros)
// Object (myObj)
// Function (myFunction)
// Output of typeof checks:
// typeof bigNumber returns "bigint": BigInt represents large integers.
// typeof outsideTemp returns "object": This is a known quirk in JavaScript where typeof null returns "object", even though null is a primitive type.
// typeof scoreValue returns "number".
// typeof myFunction returns "function".
// typeof heros returns "object": Arrays in JavaScript are objects.
// typeof myObj returns "object".
// typeof anotherId returns "symbol".


//************************************************************ */

//  STACK=> (Primitive-)[copy of original value is given ] ,
//  HEAP =>(non-Primitive)[original value refrence is given ]

// STACK
let myYtname = "XTNUVLIVE"

let anotherName = myYtname
anotherName = "NEwName"

// console.log(anotherName);
// console.log(myYtname);


// HEAP
let userOne = {
    email: "xyz@gmail.com",
    upi: "xyz@ybl"
}

let userTwo = userOne;

userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


// //Primitive
// Primitive types (like String, Number, etc.) are stored directly in the stack.
// When you copy a primitive value, a new independent copy is created.
// Changes to one variable (like anotherName) do not affect the other (myYtname), as they are independent copies in memory.

// // Non-Primitive
// Objects are reference types in JavaScript.
// When you assign userOne to userTwo, both variables reference the same object in the heap.
// Modifying the object via either userOne or userTwo affects the same object, so both reflect the changes.


