// Let's check if a number is NOT (between 1 and 10)
let number = -0.9

// These two expressions are equivalent:
let result1 = !(number >= 1 && number <= 10)
let result2 = !(number >= 1) || !(number <= 10)

console.log(result1)  // True
console.log(result2)  // True
// Checking if a person is NOT (a student or employed)
let is_student = false
let is_employed = false
// These two expressions are equivalent:
let result1 = !(is_student || is_employed)
let result2 = !is_student && !is_employed

console.log(result1)  // True
console.log(result2)  // True