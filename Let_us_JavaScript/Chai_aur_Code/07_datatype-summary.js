// Data type:- Primitive and Non-Primitive
// Primitive Data type
// 7 types:- String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100 //Number
const scoreValue = 100.3 //
const isLoggedIn = false //Boolean
const outsideTemp = null //null
let userEmail; //undefined
const id= Symbol('123') //Symbol
const anotherID = Symbol('123') //Symbol
// console.log(id === anotherID)

const bigNumber = 593748937482n // n add for bigInt
// console.log(typeof bigNumber)

// Reference (Non Primitive) :- Array, Objects, Functions

const heros = ["shaktiman", "neegraj", "doga"] // Array
let obj = {
    name: "Hitesh",
    age: 33,
} //Objects

// console.log(typeof obj) //check all typeof

// https://262.ecma-international.org/5.1/#sec-11.4.3

// memory allocation
// Stack (Primitive), Heap (Non Primitive) memory
// जब भी Stack Memory होती है उसमें Variable Declair किया तो उसका एक Copy मिलता है
// जब भी Heap मेमोरी के अन्दर Define होती है उसमे Object या Function होता है उसमे Original value का Refrence मिलता है | 

let myYoutubename = "hiteshchaudharycom"
let another = myYoutubename
another = "chaiaurcode"

// console.log(myYoutubename)
// console.log(another)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

console.log(userOne) //email output

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne) //email output different
console.log(userTwo)