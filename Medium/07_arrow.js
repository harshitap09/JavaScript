//This keyword refers to the current instance of the object,
//Basically, it keeps the current context of the code

const user = {
    name: "jia",
    product: "shampoo",
    price: 499,

    welcomeMessage: function () {
        console.log(`Hey, ${this.name}! Welcome to the website!`);
        console.log(this);      //returns the entire object ( current instance )
    }


}

user.welcomeMessage();  //first context
user.name = "harshita"; //changed value
user.welcomeMessage();  //second context

console.log(this);      //empty parenthesis in global scope



//function and this keyword
function chai() {
    let username = "harshita";
    console.log(this.username);
}

chai()

//Arrow function
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(10, 20));


//Implicit return: no need to explicitly write return
const add1 = (num1, num2) => num1 + num2;
//also
const add2 = (num1, num2) => (
    num1 + num2   //similarly we can write curly braces but need to return
)


//when we have to return an object:
const addObj = (num1, num2) => ({ username: "harshita" }); //important: need to add parenthesis
console.log(addObj(10, 20));