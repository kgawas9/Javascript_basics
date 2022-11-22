var name = 'John';
var age = 29;
var hobby = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return ('User name is ' + userName + 
            ", age is " + userAge + 
            ", and the user has boddies: " + userHasHobby);
};

console.log(summarizeUser(name, age, hobby));
