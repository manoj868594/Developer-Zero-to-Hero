// Chapter 1 - Q1 -> create a variable of type string and try to add a number to it.
let a = 4
let b = "abc"
console.log(a+b)

// Chapter 1 - Q2 -> use typeof operator to find the data type of the string in last question.
console.log(typeof(a+b))

// Chapter 1 - Q3 -> create a const object in JS. can you change it hold the number later.
const c = {
    name: "Manoj" ,
    class: "BCA",
    rollno: 51
}
// c = 54 // error Assignment to constant variable.

// Chapter 1 - Q4 -> try to add a new key to the const object in problem 3 were you able to do it.
c ['friend'] = "RAM"
console.log(c)

// Chapter 1 - Q5 -> write a JS program to create a word meaning dictionary of 5 words.
const dict = {
    appreciate: "recognize the full worth of",
    ataraxia: "a state of freedom from emotional disturbance and  anxiety",
    yakka: "work, especially hard work"
}
console.log(dict['yakka'])

// Chapter 2 - Q1- use logical operator to find whether the age is of a person lies between 10 and 20.
// let age = parseInt(prompt("What is your age "))
// if(age>10 && age<20){
//     console.log("Your age lies between 10 & 20")
// }else{
//     console.log("Your age doesn't lies between 10 & 20")
// }

// Chapter 2 - Q2- demonstrate the use of switch case statement in JS.
// let age = parseInt(prompt("What is your age?"))
// switch(age){
//     case 12:
//         console.log("Your age is 12")
//         break
//     case 13:
//         console.log("Your age is 13")
//         break
//     case 14:
//         console.log("Your age is 14")
//         break
//     default:
//         console.log("Your age is not special.")
// }

// Chapter 2 - Q3- Write a JS program to find whether a number is divisible by 2 and 3.
let num = 4
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3.")
}else{
    console.log("Your number is not divisible by 2 and 3.")
}

// Chapter 2 - Q4- Write a JS program to find whether a number is divisible by either 2 or 3.
let num1 = 3
if(num1%2==0 || num1%3==0){
    console.log("Your number is divisible by 2 or 3.")
}else{
    console.log("Your number is not divisible by 2 and 3.")
}

// Chapter 2 - Q5- Print 'you can drive or not drive' based on your age greater than 18 using ternary operator.
let age1 = 20
let a2 = age1>18 ? "You can Drive." : "You can't Drive."
console.log(a2)