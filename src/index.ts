//arrays

let names: string[] = ['Mario', 'Luigi', 'Peach']
let ages: number[] = [25, 28, 24]

names.push('Bowser')
ages.push(35)

// type inference with array

let fruits = ['apples', 'pears', 'bananas', 'mangos']
fruits.push('peaches')

const f = fruits[3]
let things = [1, true, 'hello']

const t = things[0]

// Object Literals

let user: { firstName: string; age: number; id: number } = {
  firstName: 'Mario',
  age: 25,
  id: 1,
}

user.firstName = 'Peach'

// type inference with object literals

let person = {
  name: 'Luigi',
  age: 36,
}

person.name = 'Bowser'
