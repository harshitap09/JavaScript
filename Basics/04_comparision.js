//----------AVOID THESE COMPARISIONS------------
//comapring different datatypes
console.log("2" > 1)
console.log("02" > 1)
//results are unpredictable, usually
//this unpredictabiliy persists with data types like null, undefined, etc.

console.log(null == 0)      //false 
console.log(null > 0)       //false
// == and <, >, <=, >= follow different rules
console.log(null >= 0)      //true

console.log(undefined == 0) //false
console.log(undefined > 0)  //false
console.log(undefined >= 0) //false
//-------------------------------------------------

// === strict check -> checks data type
console.log(2 === 2)         //true
console.log("2" === 2)      //false