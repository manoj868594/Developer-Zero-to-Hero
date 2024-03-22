// In Comparison Operator only output in true or false
// console.log(2>1); //true
// console.log(2 >= 1) //true
// console.log(2 < 1) //false
// console.log(2 == 1) //false
// console.log(2 != 1) //true

// When get output by string and number value
// console.log("2" > -3)
// console.log("-1" <= 1)
// The reason is that an equality check == and comparison > < >= <= work differently.
// Comparison convert null to a Number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.
// console.log(null > 0) //false
// console.log(null == 0) //false
// console.log(null >= 0) //true

// console.log(true >= false) //true
// console.log(1 > true) //false
// console.log(1 == true) //true
// console.log(1 >= true) //true

// === (strict check) value and also check data type
