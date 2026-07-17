let a=10
let b=5 
let c=a+b
let d=a-b
let e=a*b
let f=a/b
let g=a%b//modulo operator (remainder)

let number = ("enter any no here to run program ")
if (number % 2 === 1) {// === means strict equality, it checks both value and type
    console.log("odd");
} else {
    console.log("even");
}
//shortcut methods of airthmetic operations
let count = 0
count += 1 // count = count + 1
count -= 1 // count = count - 1
count /= 1 // count = count / 1
count *= 1 // count = count * 1
count %= 1 // count = count % 1
console.log(count)
//checking operators

let n1=8
let n2=9
let n3= n1>n2
let boolean=n3

console.log(`n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`)

// strict vs loose equality

let a = 10
let b = "10"
let c = true


let d=a==b
let e=a===c
let f=b!=c
let g=a!==b

console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`f = ${f}`)
console.log(`g = ${g}`)
