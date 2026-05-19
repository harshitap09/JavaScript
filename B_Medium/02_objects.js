const user = {
    name: "harshita",
    age: 21,
    place: "Ujjain",
    email: "harshita@gmail.com",
    isLoggedIn: true
}

//Two ways to access values in objects
console.log(user.name);
console.log(user["name"]);


//To create a Symbol and use in object 
const sym = Symbol("id");

const user2 = {
    name: "Hitesh",
    [sym]: "112233",
    email: "hitesh@gmail.com",
    isLoggedIn: true
}

//To access symbol we have to follow this syntax only
console.log(typeof user2[sym]);

//To lock the values of an object
Object.freeze(user2);

//If we change the value now, the system won't through an error
//but the changes won't be visibl either
user2.emaill = "hiteshk@gmail.com";

console.log(user2)

//To create functions in objects
user.greeting = function () {
    console.log("Hello user!");
    return;
}

//if we dont use return in the function then undefined will be returned
console.log(user.greeting());

user.greeting2 = function () {
    console.log(`hello, ${this.name}, we're happy to have you!`);
    return;
}


console.log(user.greeting2());

//objects can also be nested
const user3 = {
    name: {
        fullname: {
            firstname: "harshita",
            lastname: "panwar"
        },
        username: "Harshi30"
    }
}

//access nested objects
console.log(user3.name.fullname.firstname);
console.log(user3.name.fullname.lastname);
console.log(user3.name.username);
