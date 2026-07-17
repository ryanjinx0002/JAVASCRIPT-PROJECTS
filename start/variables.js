//JavaScript is capable of automatically detecting the variable type(string), which makes coding more efficient.
let a = 'ok' 
console.log("answer:", a) //print1
console.log(`answer = ${a}`)//print2
//boolean
let boolean = true
console.log(`boolean = ${boolean}`)
//naming conventions 
let firstName = "john";
let lastName = "Doe";//its initialized, so it will be a string
console.log(`firstName = ${firstName}, lastName = ${lastName}`)
//empty variable
let emptyVariable;//its uninitialized, so it will be undefined
emptyVariable = "a"
console.log(emptyVariable)//print3
//constants
const pi = 3.14
const score = 50;
// score = 75; // This would cause an error since constants cannot be reassigned
console.log(score)
console.log(pi)