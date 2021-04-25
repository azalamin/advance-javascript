const myWriting = "This is my house where i love to live alone, I want my house alone with passing high time with myself";
const getSomePart = myWriting.slice(5, 31);
// console.log(getSomePart)
//Answer > is my house where i love t

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const remove = numbers.splice(6, 2, 99, 'added')
// console.log(remove)
// console.log(numbers)

// Answer > remove [7,8]
// Answer > numbers [ 1, 2, 3, 4, 5, 6, 99, 'added', 9 ]

const together = numbers.join(" <-> ")
console.log(together)