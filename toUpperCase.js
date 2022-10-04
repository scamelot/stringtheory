// returns a new string with all letters uppercase

const firstName = 'roCK'

console.log(firstName.toUpperCase())

console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase())

const months = ['january','febRuary','marcH']

months.forEach(month => {
    console.log(month.toUpperCase())
})

//O(n)