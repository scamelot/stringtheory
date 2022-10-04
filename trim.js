//prunes whitespace

const needsATrim = ' get a haircut you bum!    '
console.log(needsATrim.trim())

console.log('      sup yo?!  '.trim())

const anotherOne = ' Anotha one     '
console.log(anotherOne.trim())

//O(n) check each char for whitespace