const person = {
    name: "John",
    age: 30,

    greet() {
        console.log("hello " + this.name);
    }
};


// object destructuring
const printName = (personData) => {
    return personData.name
}

// another way
const newPrintName = ({name}) => {
    return name
}

console.log(printName(person));
console.log(newPrintName(person));


const {name, age} = person;
console.log(name,age);
// -------------------------------------

const hobbies = ['sports', 'programming']

const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2);
