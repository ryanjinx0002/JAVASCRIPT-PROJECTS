let b1 = (50>10)
let b2 = (100<10)
let b3 = b1 || b2

console.log(`b3 = ${b3}`)

let b1 = 4
let b2 = 3
let b3 = !((b1 + b2) > (b1 * b2))
  
console.log(`b3 = ${b3}`)

let b1 = 3>1
let b2 = 5>4
let b3 = 4<3


let b4 = b1 && b2 && (!b3)
console.log(`b4 = ${b4}`)
