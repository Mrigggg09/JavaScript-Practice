//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// *********Memory************
// Stack(Primitive)  //Heap(Non-Primitive)
// Stack creates a copy of primitive datatype values
// Heap uses the same address reference of the Non-Primitive data

let myYouTubeName = "mrigGames"

let anotherName = myYouTubeName
myYouTubeName = "mrigPlays"

console.log(anotherName);
console.log(myYouTubeName);

let userOne = {
    name : "Mriganshu",
    upi : "21051@mrigbank"
}
let userTwo = userOne
userTwo.name = "Sunny"

console.log(userOne.name);
console.log(userTwo.name);