//There are three variable types :
//1. let
//2. const
//3. var

//There are multiple scopes: 
//1. Global Scope
//2. Block Scope
//3. Functional Scope

//Global Scope
let a = 100;
console.log(a);


//Block Scope
if (true) {
    let a = 10;     //error : bcz it is in block scop
    console.log(a);
    const b = 20;   //error : bcz it is in block scop
    var c = 30;     //no error : bcz it is in functional scop
}

//console.log(a);
//console.log(b);
console.log(c); //c is accessible outside the block


//nested functions
function one() {
    const username = "jia";

    function two() {
        const website = "instagram";
        console.log(username);
    }

    //console.log(website);

    two();
}

one();


//Functions and Expressions (Hoisting)
console.log(add(5));  //works
function add(num) {
    return num + num;
}

//console.log(addTwo(5));  //error : bcz it is not declared yet
const addTwo = function (num) {
    return num + num;
}

console.log(addTwo(3));