// returns all matches of given regex to an array

const str = 'Hello World!'
const regex = /[A-Z]/g
const found = str.match(regex)

console.log(found)

const str2 = 'He110 W0rld!'
const regex2 = /[0-9]/g
const found2 = str2.match(regex2)

console.log(found2)