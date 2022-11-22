const hobbies = ['sports', 'programming']

const copy_hobbies = hobbies.slice();
console.log(copy_hobbies);

const new_copy_hobbies = [hobbies] // it creates a new array, array inside array
console.log(new_copy_hobbies);

// using spread operaor
const new_arr = [...hobbies];
console.log(new_arr);


// Rest operator
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]
}

console.log(toArray(1,2,3))

const toNewArray = (...args) => {
    return args
}

console.log(toNewArray(3,2,4,5,2))
