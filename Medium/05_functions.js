function sayMyName() {
    console.log("Harshita");
}

sayMyName()

//Return
function add(number1, number2) {
    return number1 + number2;
}

const result = add(628, 726);
console.log(`Result: ${result}`);


//Handling undefined arguments
function loginUserMessage(username = "unknownUser") {
    if (!username) {
        console.log(`Please enter the username`);
        return;
    }
    return `${username} just logged in!`
}

console.log(loginUserMessage("Harshita"));
console.log(loginUserMessage());


//When number of coming parameters are not known
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 600, 800));


//When we do not know the parameters but we know object will be there
//Passing object to function
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject({
    name: "Harshita",
    price: 200
})

//Passing array to function
const myArr = [200, 400, 600, 800]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myArr));