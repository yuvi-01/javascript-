const name = "Uv "
const repoCount = 50

// console.log( name + repoCount + " Value");   // old way

//new wAy to concatinate a String

console.log(`Hello My Name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Yuvraj')


//accesing function in String

console.log(gameName[0]);
console.log(gameName[6]);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // does not change the original value of string //STACK 
//  STACK=> (Primitive-)[copy of original value is given ] 

console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));






