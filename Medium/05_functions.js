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
