// Truthy or Falsy value

const userEmail = "abc@gmail.com"
const userEmail1 = ""
const userEmail2 = ["object"]
if (userEmail){
    // console.log(`${typeof userEmail}`)
}
if(userEmail1){
    // console.log(`${userEmail1}`)
}else {
    // console.log("Don't have user email")
}
if(userEmail2){
    // console.log(`${typeof userEmail2}`)
}

// truthy value
// "0" , "false" , " " , [] , {} , funstion(){}

// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

if(userEmail.length === 0){
    // console.log("Array is Empty.")
}

// check object empty or not
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty")
}

// console.log(false == 0) 
// console.log(false == "")
// console.log(0 == "")

// Nullish Coalescing Operator (??): null undefined
let val1
// val1 = 5 ?? 10; // output 5
// val1 = null ?? 10; // output 10
// console.log(val1)

// Terniary Operator
// condition ? true : false
const icePrice = 100
// icePrice >= 80 ? console.log("less than 100") : console.log("more than 100")
// icePrice <= 80 ? console.log("less than 80") : console.log("more than 80")

