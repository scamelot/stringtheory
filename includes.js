//returns boolean true if given substring exists in string. Can change start position if given index.

console.log('Hello'.includes('Hell'))
console.log('tic tac toe'.includes('tic', 4)) // false, starts past the tic
console.log('A Toyotas a Toyota'.toLowerCase().includes('tas a toy'))

//complexity O(n) has to search each character in the string
