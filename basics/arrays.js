const hobbies = [
    'Sports', 'Cooking', 1, true, 
]

for (let hobby of hobbies){
    console.log(hobby);
}

if (hobbies.length >=1) {
    console.log(' =========== inside if condition =========== ');

    for (let hobby of hobbies){
        console.log(hobby);
    }
}

// map will return a new array
// inside map its a function, parenthesis has not been used as it doesn't accepts any input

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}))

// simpler way
console.log(hobbies.map(hobby => "Hobby: " + hobby));

hobbies.push('Programming');
console.log(hobbies);

