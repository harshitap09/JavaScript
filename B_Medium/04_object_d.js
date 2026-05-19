//Object Destructuring

const school = {
    name: "IBS Global Academy",
    address: "Ujjain",
    principal: "Mr. Sharma",
    estd: 2005
}

//destructuring
const { name } = school;
console.log(name);

//Similarly, we can also destruct all in one line
const { principal, address } = school;
console.log(principal);
console.log(address);

//Also, we can rename these keys into new variables
const { estd: established } = school;
console.log(established);


