let score = "33";

console.log(typeof score) //string
console.log(typeof(score))

let score1 = Number(score) //type conversion
console.log(typeof score1) //number

let isLoggedIn = 1                             //this can be any numer apart from 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true

let someNumber = -1
let booleanSomeNumber = Boolean(someNumber)
console.log(booleanSomeNumber) //false

//NaN - not a number 
let a = "33abs"
console.log(typeof a) //string
let aNumber = Number(a)
console.log(aNumber) //NaN
console.log(typeof aNumber) //number
//typeof (NaN) is a number
//typeof (null) is 0
//typeof (undefined) is NaN

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN