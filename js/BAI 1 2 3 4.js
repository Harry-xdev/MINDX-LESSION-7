console.log("1/ Square root of a integer")
let a = prompt("Square root of:")
console.log("Square root of:",a)
let b = Math.sqrt(a)
console.log("Result:", b)
console.log("--------")

console.log("2/ Area of triangle")
let h = prompt("Height of triangle:")
let b2 = prompt("Bottom of triangle:")
console.log("Height:", h, "CM")
console.log("Bottom:", b2, "CM")
let s = (h * b2) / 2
console.log("Area of triangle:",s,"CM SQUARE")
console.log("--------")

console.log("3/ F temperature to C")
let f = prompt("Temperature in F:")
const i = 32/1.8
let c = (f / 1.8) - i
console.log("in F:", f)
console.log("in C:", c)
console.log("--------")

console.log("4/ KILOMET to MET")
let km = prompt("Kilomet:")
const z = 1000
let mt = km * z
console.log(km,"Km =",mt,"M")