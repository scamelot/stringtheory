// joins two strings together

let str1 = "Hello"
let str2 = "World"
let strArray = [str1,str2]
console.log(''.concat(str1,str2))
console.log(''.concat(...strArray))
console.log(str1.concat(' ', str2))

//time complexity - O(n)

