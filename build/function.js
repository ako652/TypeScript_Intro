"use strict";
// 1. write a function to check the length of user input as their name
function lengthOfName(getName) {
    return getName.length;
}
console.log(lengthOfName('luther'));
// 2. write a function to compare the number user insert to the number 3 then display the suitable message
function compareNumber(num) {
    if (num === 3) {
        return 'equal number';
    }
}
console.log(compareNumber(3));
const users = [
    { name: "andrea", age: 4 },
    { name: "hanna", age: 9 },
];
// 3. write a function that take users array as a parameter then check if user has age greater than 3
function userComparison(users) {
    for (let i = 0; i <= users.length; i++) {
        if (users[i].age > 3) {
            return users[0].age;
        }
    }
}
console.log(userComparison(users));
// 4. write a function takes 2 parameters : users array and userInput to check if the userInput is matched with the user name
function checkUserName(users, userInput) {
    for (let i = 0; i <= users.length; i++) {
        if (userInput === users[i].name) {
            return `${userInput} is in the users array`;
        }
        else {
            return `${userInput} is not in the array`;
        }
    }
}
console.log(checkUserName(users, 'alex'));
console.log(checkUserName(users, "hanna"));
//  2 ways
// searchName(users, "alex"); => alex is not in the users array
// searchName(users, "andrea"); => andrea is in the users array
