const person = {
    name: 'John',
    age: 22,

    greet: function() {
        console.log('Hi, I am ' + this.name);
    }

    // another way to write a function
    // greet() {
    //     console.log('Hi, I am ' + this.name);
    // }
};

console.log(person);
person.greet();