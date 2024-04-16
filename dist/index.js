"use strict";
//arrays
let names = ['Mario', 'Luigi', 'Peach'];
let ages = [25, 28, 24];
names.push('Bowser');
ages.push(35);
// type inference with array
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('peaches');
const f = fruits[3];
let things = [1, true, 'hello'];
const t = things[0];
// Object Literals
let user = {
    firstName: 'Mario',
    age: 25,
    id: 1,
};
user.firstName = 'Peach';
// type inference with object literals
let person = {
    name: 'Luigi',
    age: 36,
};
person.name = 'Bowser';
// FUNCTIONS - when you specify a return type, you must return that type :number in this case is the return type and we specify that after the function parameters
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
console.log(addTwoNumbers(3, 9));
subtractTwoNumbers(10, 5);
function addAllNumbers(items) {
    const total = items.reduce((a, b) => a + b, 0);
    console.log(total);
    //return total
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
// return type inference - if you don't specify a return type, it will infer the return type based on the return value
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const results = formatGreeting('Mario', 'Hello');
console.log(results);
