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
//console.log(addTwoNumbers(3, 9))
subtractTwoNumbers(10, 5);
function addAllNumbers(items) {
    //void is used when you don't want to return anything
    const total = items.reduce((a, b) => a + b, 0);
    //console.log(total)
    //return total
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
// return type inference - if you don't specify a return type, it will infer the return type based on the return value
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const results = formatGreeting('Mario', 'Hello');
//console.log(results)
//---------------------------------------------------------------
// ANY TYPE - use this when you don't know the type of the value
//---------------------------------------------------------------
let age;
age = 30;
age = false;
// this is okay because age is of type any
// the downside is that you lose type checking so typesciprt won't be able to catch errors
// ANY TYPE - Arrays
let stuff = [1, true, 'hello'];
stuff.push({ id: 123 });
// ANY TYPE - Functions
function addTogether(value) {
    return value + value; // this will work for numbers and strings
}
//console.log(addTogether(5))
function addItems(a, b) {
    return a + b; // this will work for numbers and strings
}
//console.log(addItems('make', 10))
// one useful case for any is when you are working with a third party library that doesn't have types
//---------------------------------------------------------------
// TUPLES - fixed length array where each element has a fixed type
// the type order must match the order of the values
//---------------------------------------------------------------
let character = ['Mario', 25, true];
// you can't change the order of the types or the length of the tuple
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [70.4, 20.1];
function useCoords(x, y) {
    //get coords
    return [x, y];
}
//console.log(useCoords(1, 3))
function latLong() {
    //this is going to return an array of numbers as we specified in the return type [number,number]
    return [40.776909, -73.873415];
}
const [lat, long] = latLong();
// ---------------------------------------------------------------
// NAMED TUPLES - you can use an object to define the tuple
// ---------------------------------------------------------------
let user2;
user2 = ['Peach', 25];
//console.log(user2[0])
let user3 = { name: 'Mario', age: 25 };
const authorOne = { name: 'Mario', avatar: '/img/mario.png' };
const newPost = {
    title: 'My first post',
    content: 'This is my first post',
    tags: ['first', 'post'],
    created_at: new Date(),
    author: authorOne,
};
//---------------------------------------------------------------
// Interfaced used with functions as argument types
//---------------------------------------------------------------
function createPost(post) {
    //create post
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// ---------------------------------------------------------------
// Interfaces with arrays
//---------------------------------------------------------------
let posts = [];
posts.push(newPost);
console.log(posts);
