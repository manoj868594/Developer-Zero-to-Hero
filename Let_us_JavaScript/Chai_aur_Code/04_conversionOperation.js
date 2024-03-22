let score = 44
let score1 = "44abc" // value change in true, false, null, undefined,
// console.log(typeof score) // number
// console.log(typeof score1) // string

let valueInNumber = Number(score1)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // NaN(Not A Number)

// Conversion
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = " "

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

// Conversion
// 1 => true, 0 => false
// "" => false, " " => true
// "Hitesh" => false
// "5765" => true
