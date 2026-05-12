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


