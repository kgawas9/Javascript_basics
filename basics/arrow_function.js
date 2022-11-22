const name = 'John';
let age = 12;
const hasHobbies = true;

age = 22;

const summarizeUser = (userName, userAge, userHasHoddy) => {
    return "User name is " + userName + " age is " + userAge + " has hobby -> " + userHasHoddy;
}; 


// one way
const add = (num1, num2) => {
    return num1 + num2;
}

// shorter way
const addition = (a,b) => a + b;

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(2,3));
console.log(addition(2,3));
