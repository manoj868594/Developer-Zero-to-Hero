// Q1- Writet a program to print the marks of a student in an object using for loop.
let obj = {
    harry: 98,
    rohan: 70,
    akash: 99
}
// console.log(obj[Object.keys(obj)[2]])
for(let i=0;i<Object.keys(obj).length;i++){
    // console.log(obj[Object.keys(obj)[i]])
}

// Q2:- Write the program in Q1 using for in loop.
for(let key in obj){
    // console.log("The marks of",key,"are",obj[key])
}

// Q3:- Write a program to print "try again" until the uses enters the correct number.
let correct_num = 43;
let i;
// while(i != correct_num){
    // i = prompt("Ener a correct number")
    // console.log("try again")
// }
// console.log("You entered a correct number")

// Q4:- Write a function to find mean of 5 number.
const mean = (a, b, c, d) => {
    return (a + b + c + d)/4
}
// console.log(mean(2,3,4,3))

// Q5:-  What will the following print in JS ? console.log("har\"".length)
const har = "Har\""
// console.log(har.length)

// Q6:- Explore the include, StartsWith & EndsWith function of a string.
let dog = "The quick brown fox jumps over the lazy dog."
// console.log(dog.startsWith("THe quick"))
// console.log(dog.endsWith("dog."))

// Q7:- Write a program to convert a given string to lowercase.
// console.log(dog.toLowerCase())

// Q8:- Extract the amount out of this string. "Please give Rs. 1000"
const str = "Please give Rs. 1000"
const amount = Number.parseInt(str.slice(16))
// console.log(amount)
// console.log(typeof amount)

// Q9:- Try to change 4th character of a given string were you able to do it.
const frd = "Deepika" // string are immutable, So can not change
frd[2] = "R"
// console.log(frd)

// Q10:- Create an array of numbers and tke input from the user to add numbers to this array.
const arr4 = [3,5,4,6]
// let arrInput = parseInt(prompt("Enter a number "))
let arrInput = 56
arr4.push(arrInput)
// console.log(arr4)

// Q11:- Keep adding numbers to the array in until 0 is added to the array.
let a;
// do{
//     a = parseInt(prompt("Enter a Number "))
    arr4.push(a)
// }while(a != 0)
// console.log(arr4)

// Q12:- filter for numbers divisible by 10 from a given array.
let arr5 = [3,5,10,40,50,29340]
let n = arr5.filter((x)=>{
    return x%10 === 0
})
// console.log(n)

// Q13:- Create an array of square of given numbers.
let n1 = arr5.map((x)=>{
    return x*x
})
// console.log(n1)

// Q14:- Use reduce to calculte factorial of a given number from an array of first n natural numbers(n being the number whose factorial needs to be calculated)
arr6 = [3,6,3,5]
let m2 = arr6.reduce((x,y)=>{
    return x * y
})
// console.log(m2)

// Write a JaveScript program to generate a random number and store it in a variable. The program than take an input from the user to tell them whether the guess was correct,greater,less than the original number. 100 is the score of the user, The Program is expected to terminate once the number is guessed. Number should be between 1 - 100.
let guessNum = Number.parseInt(Math.random()*100);
// console.log(guessNum)
let inputNum;
let score = 100;
// while(inputNum != guessNum){
//     score = score -1;
//     inputNum = prompt("Enter the number ")
//     if(inputNum == guessNum){
//         console.log("Congradulation! You guess the correct ",inputNum)
//         console.log(`You guess the actual number ${100 - score} chances`)
//     }else if(inputNum > guessNum && inputNum < 100){
//         console.log("Your number is greater")
//     }else if(inputNum < guessNum && inputNum > 0){
//         console.log("Your number is smaller")
//     }else{
//         console.log("Enter number between 1 to 100")
//     }
// }

let promptA = prompt("Enter a number")
promptA = Number.parseInt(promptA)
document.write(typeof promptA)
alert(`You entered ${promptA}`)