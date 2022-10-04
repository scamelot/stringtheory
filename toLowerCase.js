//makes all letters in a given string lowercase.

const str = 'HeLLO WOoOoOoOoRlD'

console.log(str.toLowerCase())
const firstName = 'JoHN'
const greet = `Hello, ${firstName.toLowerCase()}`
console.log(greet)
const goodGreet = `Hello, ${firstName.charAt(0).toUpperCase() +  firstName.slice(1).toLowerCase()}`
console.log(goodGreet)

//O(n)