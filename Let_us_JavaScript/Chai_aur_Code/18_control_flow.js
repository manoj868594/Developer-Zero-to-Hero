// if
// <, >, <=, >=, ==, !=, ===, !==

if (2 !== "2") {
//   console.log("true");
}

const temprature = 44
if(temprature === 50){
    // console.log(`Equal than ${temprature}`)
}else if(temprature < 50){
    // console.log(`Less than 50`)
}else {
    // console.log("greator than 50")
}
// console.log("Code Executed")

const score = 200
if(score > 100){
    let power = "Fly"
    // console.log(`User1 power: ${power}`)
}
// console.log(`User2 power: ${power}`) //Here error

const balance = 1000
// if(balance > 500) console.log("test"); //code is not recommend

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard ){ // && all conditions true
    // console.log("Allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail){ // one condition true
    // console.log("User Logged In")
}

