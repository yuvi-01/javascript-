const name = "Uv "
const repoCount = 50

// console.log( name + repoCount + " Value");   // old way

//new wAy to concatinate a String

console.log(`Hello My Name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Yuvraj') // other way


//accesing function in String

console.log(gameName[0]); // accessing key values 
console.log(gameName[6]);

console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase()); // does not change the original value of string //STACK 
//  STACK=> (Primitive-)[copy of original value is given ] 

console.log(gameName.charAt(2)); //character  T THE position
console.log(gameName.indexOf('r'));//  finDING pOSITION OF ELEMENTS

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

//trim and replace

const newStringOne ="   yuvraj   "
console.log(newStringOne);
console.log(newStringOne.trim());



//replace

const url ="https://yuvraj.com/yuvraj%20singh"

console.log(url.replace('%20','-'))

console.log(url.includes('yuvraj')) // tto check out the given keyword is present
console.log(url.includes('bisht')) 


console.log(gameName.split('-'));










