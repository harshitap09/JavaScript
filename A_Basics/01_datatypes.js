let name = 'harshita'
let age = 21
let isHuman = true

console.table([name, age, isHuman])
//PRIMITIVE DATATYPES
//number 
//bigint
//string 
//boolean
//null : standalone value, representation of empty value [defined as null]
//undefined : no value defined 
//symbol : for uniqueness

//OBJECTS

console.log(typeof name)
console.log(typeof null)
console.log(typeof undefined)

//------------Primitive------------
//String, Number, Boolean, Null, Undefined, BigInt, Symbol

//----------Non-Primitive----------
//Object, Array, Function


//Array
const heros = ["shaktiman", "spiderman", "batman"]
console.log(heros)
console.log(typeof heros)

//Object
let myObj = {
    name: "harshita",
    age: 21,
    isHuman: true
}
console.log(myObj)
console.log(typeof myObj)

//Function
let myFunction = function () {
    console.log("Hello World");
}
console.log(myFunction)
console.log(typeof myFunction)