document.write("Hello")
console.log(window)
// DOM - Document Object Model
// BOM - Brawser Object Model - alert, confirm, prompt, window
// window is a global object. 

// Q1- Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!
let age = prompt("Enter your age ")
age = Number.parseInt(age);
const canDrive =(age)=>{
    return age>18;
}
if(canDrive(age)){
    alert("You can drive")
}else{
    alert("You can't drive.")
}

//  Q2- In Q1 use confirm to ask the user if he wants to see the prompt again.
let runAgain = true;
const canDrive1 =(age)=>{
    return age>18;
}
while(runAgain){
    let age = prompt("Enter your age ")
    age = Number.parseInt(age);
if(age<0){
    console.error("Please enter valid age.")
    break;
}else if(canDrive1(age)){
    alert("You can drive")
}else{
    alert("You can't drive.")
}
runAgain = confirm("Do you want to play again?")
}

// Q3- In the previous question, use console.error to log the error if the age entered is negative.
// above done

// Q4- Write a program to change the url to google.com if user enters a number greater than 4.
let number = prompt("Enter a number ")
number = Number.parseInt(number)
if(number>7){
    location.href = "https://google.com"
}else{
    document.write("You number is lowestt")
}

// Q5- Change the background of the page any other color based on user input through prompt.
let color = prompt("Enter the page color.");
document.body.style.background = color;

// Q6:- Snake, Water and Gun
let snake = 'S'
let water = 'W'
let gun = 'G'
let game = prompt("Enter S,W,G any one")
if(snake.toLowerCase() === game.toLowerCase()){
    console.log("Snake win")
}else if(water.toLowerCase() === game.toLowerCase()){
    console.log("water win")
}else if(gun.toLowerCase() === game.toLowerCase()){
    console.log("Gun win")
}else{
    console.log("Wrong input")
}