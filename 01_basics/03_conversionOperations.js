let score = "33ab"

console.log(typeof score)
console.log(typeof(score)) //two ways of writing

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))
console.log(valueInNumber);

// "33" => 33
// "33abdjdh" => NaN
// true =>1 ;false => 0
// null => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true;0 => false
// "" => false
// "mriga" => true

let someNumber = 34

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))